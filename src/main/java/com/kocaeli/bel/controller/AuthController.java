// Put this in src/main/java/com/kocaeli/bel/controller/AuthController.java
package com.kocaeli.bel.controller;

import com.kocaeli.bel.DTO.LoginResponse;
import com.kocaeli.bel.service.UserService;
import com.kocaeli.bel.DTO.LoginRequest;
import com.kocaeli.bel.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService; // Inject UserService

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            User user = userService.authenticateUserRaw(loginRequest.getUsername(), loginRequest.getPassword());

            // Generate token (dummy token for example purposes)
            String token = "dummyToken123";

            // Create login response
            LoginResponse loginResponse = new LoginResponse(token, user.getTCNo());

            return ResponseEntity.ok()
                    .body(Map.of("status", "success", "data", loginResponse));
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("status", "error", "message", "Geçersiz kullanıcı adı veya şifre"));
        }
    }

    @PostMapping("/register")
    public <RegisterRequest> ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        try {
            // Check if user already exists
            if (userRepository.existsByTcNo(registerRequest.getTcNo())) {
                return ResponseEntity.badRequest()
                        .body(Map.of("status", "error", "message", "Bu TC Kimlik Numarası zaten kayıtlı"));
            }

            // Create new user
            User newUser = new User();
            newUser.setTcNo(registerRequest.getTcNo());

            // If username is null or empty, use TC No as username
            String username = registerRequest.getUsername();
            if (username == null || username.trim().isEmpty()) {
                username = registerRequest.getTcNo();
            }
            newUser.setUsername(username);

            // Set password - use encoder for production!
            newUser.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

            // Save user
            userRepository.save(newUser);

            return ResponseEntity.ok()
                    .body(Map.of("status", "success", "message", "Kayıt başarılı"));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("status", "error", "message", "Kayıt işlemi sırasında bir hata oluştu"));
        }
    }

}