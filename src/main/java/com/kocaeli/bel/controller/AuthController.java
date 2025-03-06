// Put this in src/main/java/com/kocaeli/bel/controller/AuthController.java
package com.kocaeli.bel.controller;

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

            return ResponseEntity.ok()
                    .body(Map.of("status", "success", "username", user.getUsername()));
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("status", "error", "message", "Geçersiz kullanıcı adı veya şifre"));
        }
    }

}