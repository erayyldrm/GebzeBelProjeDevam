// Put this in src/main/java/com/kocaeli/bel/controller/AuthController.java
package com.kocaeli.bel.controller;

import com.kocaeli.bel.DTO.LoginResponse;
import com.kocaeli.bel.service.UserService;
import com.kocaeli.bel.DTO.LoginRequest;
import com.kocaeli.bel.DTO.RegisterHandler;
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
    public ResponseEntity<?> register(@RequestBody RegisterHandler registerRequest) {
        try {
            // Create new user object from request data
            User user = new User();
            user.setTCNo(registerRequest.getTCNo());
            user.setPassword(registerRequest.getPassword());
            // Create new user through service

            // For debugging
            System.out.println("TCNo: " + registerRequest.getTCNo());

            User newUser = userService.registerUser(user);


            return ResponseEntity.ok()
                    .body(Map.of("status", "success", "data", newUser));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("status", "error", "message", "Kayıt işlemi sırasında bir hata oluştu: " + e.getMessage()));
        }
    }

}