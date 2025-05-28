package com.kocaeli.bel.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kocaeli.bel.DTO.UserDTO; // UserDTO'nuzun bu pakette olduğunu varsayalım
import com.kocaeli.bel.model.User;   // User modelinizin bu pakette olduğunu varsayalım
import com.kocaeli.bel.service.PermissionService;
import com.kocaeli.bel.service.UserService;
import com.kocaeli.bel.exception.UserAlreadyExistsException; // Bu exception'ı yakalamak için

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;
    private final PermissionService permissionService;

    // UserDTO'nun isim ve status alanlarını da içerecek şekilde constructor'ı veya setter'ları olmalı.
    // Bu yardımcı metod User entity'sini UserDTO'ya dönüştürür (yanıtlar için).
    private UserDTO convertToDTO(User user) {
        if (user == null) return null;
        // UserDTO constructor'ınızın bu alanları aldığını varsayalım:
        // public UserDTO(Long id, String tcNo, String isim, String role, String status)
        // Veya UserDTO'nuzda getter/setter'lar varsa:
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setTcno(user.getTCNo()); // User modelinizde getTCNo() olmalı
        dto.setIsim(user.getIsim()); // User modelinizde getIsim() olmalı
        dto.setYetkilerJson(user.getYetkilerJson());
        dto.setStatus(user.getStatus()); // User modelinizde getStatus() olmalı
        return dto;
    }


    public UserController(UserService userService, PermissionService permissionService) {
        this.userService = userService;
        this.permissionService = permissionService;
    }

    /**
     * Tüm kullanıcıları UserDTO listesi olarak döner.
     * Bu metod doğrudan UserService'deki getAllUsers() metodunu kullanır.
     * @return Kullanıcı DTO listesi ve HTTP 200 OK durumu.
     */
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        // UserService.getAllUsers() zaten List<UserDTO> döndürüyor.
        // Bu DTO'nun içeriği (id, tcNo, role) servisiniz tarafından belirleniyor.
        // Eğer frontend'de isim ve status gibi daha fazla alan gerekiyorsa,
        // UserService.getAllUsers() metodundaki DTO oluşturma mantığını güncellemeniz gerekir.
        // Şimdilik, UserService'in döndürdüğü DTO yapısını kullanıyoruz.
        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    /**
     * Belirtilen ID'ye sahip kullanıcıyı UserDTO olarak döner.
     * @param id Getirilmek istenen kullanıcının ID'si.
     * @return Bulunan kullanıcı DTO'su ile HTTP 200 OK veya kullanıcı bulunamazsa HTTP 404 Not Found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        Optional<User> userOptional = userService.getUserById(id);
        return userOptional.map(user -> ResponseEntity.ok(convertToDTO(user)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Yeni bir kullanıcı oluşturur. İstek gövdesinde tcNo, isim, rol, statü ve şifre beklenir.
     * Şifre UserService içerisinde hash'lenir.
     * @param userDTO Oluşturulacak kullanıcı bilgilerini içeren DTO (tcNo, isim, rol, statü, password).
     * @return Oluşturulan kullanıcı DTO'su (şifre hariç) ve HTTP 201 Created durumu.
     * Eğer TCNo zaten kullanımdaysa HTTP 409 Conflict döner.
     */
    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        try {
            User user = new User();
            // UserDTO'dan gelen bilgileri User entity'sine aktar
            user.setTCNo(userDTO.getTcno()); // UserDTO'da getTcNo() olmalı
            user.setIsim(userDTO.getIsim()); // UserDTO'da getIsim(), User'da setIsim() olmalı
            // Default yetkileri atayalım
            Map<String, Map<String, Boolean>> defaultPermissions = permissionService.getDefaultPermissions();
            user.setYetkilerJson(convertPermissionsToJson(defaultPermissions));

            user.setStatus(userDTO.getStatus());// UserDTO'da getStatus(), User'da setStatus() olmalı
            user.setPassword(userDTO.getPassword()); // UserDTO'da getPassword(), User'da setPassword() olmalı

            // UserService.registerUser metodu TCNo kontrolü ve şifre hash'leme yapar
            User createdUser = userService.registerUser(user);
            return new ResponseEntity<>(convertToDTO(createdUser), HttpStatus.CREATED);
        } catch (UserAlreadyExistsException e) {
            // Eğer TCNo zaten varsa, UserService UserAlreadyExistsException fırlatır.
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null); // Veya bir hata mesajı içeren body
        } catch (Exception e) {
            // Diğer beklenmedik hatalar için
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    /**
     * Mevcut bir kullanıcıyı günceller. ID URL'den, güncellenecek alanlar (isim, rol, statü) istek gövdesinden alınır.
     * TCNo ve şifre güncellemesi bu endpoint üzerinden yapılmamaktadır (gerekirse ayrı endpointler düşünülebilir).
     * @param id Güncellenecek kullanıcının ID'si.
     * @param userDetailsDTO Güncellenmiş kullanıcı bilgilerini içeren DTO (isim, rol, statü).
     * @return Güncellenen kullanıcı DTO'su ile HTTP 200 OK veya kullanıcı bulunamazsa HTTP 404 Not Found.
     */
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDetailsDTO) {
        Optional<User> userOptional = userService.getUserById(id);
        if (userOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        User existingUser = userOptional.get();
        // Update fields regardless of null (but handle empty strings)
        existingUser.setIsim(userDetailsDTO.getIsim() != null ? userDetailsDTO.getIsim() : existingUser.getIsim());
        existingUser.setYetkilerJson(userDetailsDTO.getYetkilerJson() != null ? userDetailsDTO.getYetkilerJson() : existingUser.getYetkilerJson());
        existingUser.setStatus(userDetailsDTO.getStatus() != null ? userDetailsDTO.getStatus() : existingUser.getStatus());

        User updatedUser = userService.saveUser(existingUser);
        return ResponseEntity.ok(convertToDTO(updatedUser));
    }
    // Yardımcı metod: Permissions Map'i JSON string'e çevirir
    private String convertPermissionsToJson(Map<String, Map<String, Boolean>> permissions) {
        try {
            // Gerçek uygulamada ObjectMapper kullanın
             ObjectMapper mapper = new ObjectMapper();
             return mapper.writeValueAsString(permissions);
        } catch (Exception e) {
            return "{}";
        }
    }
    /**
     * Belirli bir ID'ye sahip kullanıcıyı siler.
     * @param id Silinecek kullanıcının ID'si.
     * @return Başarılı silme işleminden sonra HTTP 204 No Content.
     * Kullanıcı bulunamazsa HTTP 404 Not Found döner.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (!userService.existsById(id)) { // Önce var olup olmadığını kontrol et
            return ResponseEntity.notFound().build();
        }
        try {
            userService.deleteUser(id);
            return ResponseEntity.noContent().build(); // HTTP 204 No Content
        } catch (Exception e) {
            // Örneğin, kullanıcıya bağlı başka kayıtlar varsa ve silinemiyorsa (DataIntegrityViolationException)
            // Bu durumda 500 Internal Server Error veya 409 Conflict dönebilir.
            // Şimdilik genel bir 500 varsayalım.
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Yetkileri sıfırlama endpoint'ini güncelleyelim
    @PutMapping("/{id}/yetkileri-sifirla")
    public ResponseEntity<UserDTO> yetkileriSifirla(@PathVariable Long id) {
        Optional<User> userOptional = userService.getUserById(id);
        if (userOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        User user = userOptional.get();
        // Default yetkileri atayalım
        Map<String, Map<String, Boolean>> defaultPermissions = permissionService.getDefaultPermissions();
        user.setYetkilerJson(convertPermissionsToJson(defaultPermissions));

        User updatedUser = userService.saveUser(user);
        return ResponseEntity.ok(convertToDTO(updatedUser));
    }
}