package com.kocaeli.bel.controller;

import com.kocaeli.bel.DTO.UserDTO;
import com.kocaeli.bel.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // Bu sınıfın bir REST denetleyicisi olduğunu belirtir
@RequestMapping("/api/users") // Bu denetleyiciye gelen isteklerin kök yolu
@CrossOrigin(origins = "http://localhost:5173") // React (frontend) uygulamasından gelen isteklere izin verir
public class UserController {

    private final UserService userService;

    /**
     * UserController constructor'ı, Spring tarafından otomatik olarak enjekte edilen UserService ile çalışır.
     * @param userService Kullanıcı işlemlerini gerçekleştiren servis sınıfı
     */
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Tüm kullanıcıları dönen HTTP GET isteği için uç nokta.
     * @return Kullanıcıları temsil eden DTO nesnelerinden oluşan bir liste
     */
    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }
}
