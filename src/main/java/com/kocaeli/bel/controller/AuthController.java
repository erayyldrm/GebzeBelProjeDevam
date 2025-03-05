
// Authentication Controller
package com.kocaeli.bel.controller;

import com.kocaeli.bel.model.User;
import com.kocaeli.bel.repository.UserRepository;
import com.kocaeli.bel.DTO.LoginRequest;
import com.kocaeli.bel.DTO.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());

        if (userOptional.isPresent() &&
                passwordEncoder.matches(loginRequest.getPassword(), userOptional.get().getPassword())) {
            // Generate a simple token (in production, use JWT)
            String token = UUID.randomUUID().toString();

            return ResponseEntity.ok(new LoginResponse(
                    token,
                    userOptional.get().getUsername()
            ));
        }

        return ResponseEntity.badRequest().body("Invalid credentials");
    }

    // Optional: Registration endpoint
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        // Check if username already exists
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        // Encode password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Save user
        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully");
    }
}