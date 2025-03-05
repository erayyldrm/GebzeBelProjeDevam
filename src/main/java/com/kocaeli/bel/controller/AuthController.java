
// Authentication Controller
package com.kocaeli.bel.controller;

import com.kocaeli.bel.model.User;
import com.kocaeli.bel.repository.UserRepository;
import com.kocaeli.bel.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        // Check if user already exists
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Kullanıcı adı zaten kullanımda");
        }

        // Encode password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Save user
        userRepository.save(user);

        return ResponseEntity.ok("Kullanıcı başarıyla kaydedildi");
    }
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody User user) {
        userService.authenticateUser(user.getUsername(), user.getPassword());

        return ResponseEntity.ok("Giriş galiba oldu");
    }
}