// Put this in src/main/java/com/kocaeli/bel/controller/AuthController.java
package com.kocaeli.bel.controller;

import com.kocaeli.bel.DTO.LoginResponse;
import com.kocaeli.bel.service.UserService;
import com.kocaeli.bel.DTO.LoginRequest;
import com.kocaeli.bel.DTO.RegisterRequest;
import com.kocaeli.bel.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        try {
            User user = userService.authenticateUserRaw(registerRequest.getTCNo(), registerRequest.getPassword());
            // Check if user already exists
            if (userService.existsByTCNo(registerRequest.getTCNo())) {
                return ResponseEntity.badRequest()
                        .body(Map.of("status", "error", "message", "Bu TC Kimlik Numarası zaten kayıtlı"));
            }

            // Create new user through service
            User newUser = userService.registerUser(user);


            return ResponseEntity.ok()
                    .body(Map.of("status", "success", "data", newUser));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("status", "error", "message", "Kayıt işlemi sırasında bir hata oluştu: " + e.getMessage()));
        }
    }

}