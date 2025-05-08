// Put this in src/main/java/com/kocaeli/bel/controller/AuthController.java
package com.kocaeli.bel.controller;

import com.kocaeli.bel.DTO.LoginResponse;
import com.kocaeli.bel.repository.UserRepository;
import com.kocaeli.bel.service.UserService;
import com.kocaeli.bel.DTO.LoginRequest;
import com.kocaeli.bel.DTO.RegisterHandler;
import com.kocaeli.bel.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.kocaeli.bel.security.JwtTokenProvider;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService; // Inject UserService

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

   @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
    try {
        // Log login attempt
        // System.out.println("Login attempt for username: " + loginRequest.getUsername());

        // Create authentication object
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        // Generate JWT token using your provider
        String token = jwtTokenProvider.generateToken(authentication);

        // Now fetch your domain User object using the repository
        User user = userService.authenticate(loginRequest.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

            // Create login response
            LoginResponse loginResponse = new LoginResponse(token, user.getTCNo());
            // System.out.println("Tokentest: " + token);

            return ResponseEntity.ok()
                    .body(Map.of(
                            "status", "success",
                            "data", loginResponse,
                            "role", user.getRole()
                    ));
        } catch (Exception e) {
            System.out.println("Authentication error: " + e.getMessage());
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
            user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));


            //user.setPassword(registerRequest.getPassword());
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