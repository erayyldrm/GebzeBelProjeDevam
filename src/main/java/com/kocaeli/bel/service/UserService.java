package com.kocaeli.bel.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kocaeli.bel.DTO.UserDTO;
import com.kocaeli.bel.model.User;
import com.kocaeli.bel.repository.UserRepository;
import com.kocaeli.bel.exception.UserAlreadyExistsException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.core.type.TypeReference;

import java.util.List;
import java.util.Optional;

@Service // Bu sınıfın bir servis katmanı olduğunu belirtir (iş mantığı burada yazılır)
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ObjectMapper objectMapper;

    @Value("${app.default-yetkiler}")
    private String defaultYetkilerJson;


    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, ObjectMapper objectMapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.objectMapper = objectMapper;

    }

    // Veritabanındaki tüm kullanıcıları UserDTO biçiminde döner (şifre gibi hassas bilgiler hariç)
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(user -> new UserDTO(user.getId(), user.getTCNo(),user.getIsim(),user.getStatus(), user.getYetkilerJson() ))
                .toList();
    }
    public String getDefaultYetkiler() {
        try {
            return objectMapper.readValue(defaultYetkilerJson,
                    new TypeReference<>() {});
        } catch (Exception e) {
            throw new RuntimeException("Default yetki yapısı okunamadı", e);
        }
    }
    // ID'ye göre kullanıcıyı döner (bulunmazsa boş Optional)
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // Yeni bir kullanıcıyı kaydeder
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Kullanıcıyı ID ile siler
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // Belirtilen ID'ye sahip kullanıcı var mı kontrol eder
    public boolean existsById(Long id) {
        return userRepository.existsById(id);
    }

    // Belirtilen TCNo'ya sahip kullanıcı var mı kontrol eder
    public boolean existsByTCNo(String TCNo) {
        return userRepository.existsByTCNo(TCNo);
    }

    // TCNo ile kullanıcıyı döner (giriş işlemi için kullanılabilir)
    public Optional<User> authenticate(String email) {
        return userRepository.findByTCNo(email);
    }

    // Yeni kullanıcıyı kayıt eder (TCNo benzersiz olmalı ve şifre hashlenir)
    public User registerUser(User user) {
        //System.out.println("Registering user with TCNO: " + user.getTCNo());
        //System.out.println("Password before encoding: " + user.getPassword());
        if (userRepository.findByTCNo(user.getTCNo()).isPresent()) {
            throw new UserAlreadyExistsException("Bu TC No ile kayıtlı bir kullanıcı zaten var.");
        }
        try {
            // Şifreyi hashle
            user.setPassword(passwordEncoder.encode(user.getPassword()));

            objectMapper.readTree(defaultYetkilerJson); // JSON geçerli mi?

            // Default yetkileri ata
            if (user.getYetkilerJson() == null || user.getYetkilerJson().isEmpty()) {
                user.setYetkilerJson(defaultYetkilerJson);
            }

            return userRepository.save(user);
        } catch (Exception e) {
            e.printStackTrace(); // Hata detayını gör
            throw new RuntimeException("Kullanıcı kaydı sırasında bir hata oluştu", e);
        }

    }
    public User yetkileriSifirla(Long kullaniciId) {
        User user = userRepository.findById(kullaniciId)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı"));
        user.setYetkilerJson(getDefaultYetkiler());
        return userRepository.save(user);
    }
    // Şifreyi kontrol ederek kimlik doğrulama yapar (şifre karşılaştırması yapılır)
    public User authenticateUser(String username, String rawPassword) {
        return userRepository.findByTCNo(username)
                .filter(user -> passwordEncoder.matches(rawPassword, user.getPassword()))
                .orElseThrow(() -> new UsernameNotFoundException("Invalid username or password"));
    }
}
