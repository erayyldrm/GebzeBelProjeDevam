package com.kocaeli.bel.controller;

import com.kocaeli.bel.model.User;
import com.kocaeli.bel.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/register")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"}) // Allow CORS for multiple origins
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users); // Return the list with OK HTTP status
    }

    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User createdUser = userService.saveUser(user);
        return ResponseEntity.ok(createdUser); // Return the created user with OK status
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userService.getUserById(id)
                .map(existingUser -> {
                    // Update the existing user
                    existingUser.setName(userDetails.getName());
                    existingUser.setEmail(userDetails.getEmail());
                    User updatedUser = userService.saveUser(existingUser); // Save the updated user
                    return ResponseEntity.ok(updatedUser);
                })
                .orElse(ResponseEntity.notFound().build()); // If user not found, return 404
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userService.existsById(id)) {
            userService.deleteUser(id); // Delete the user
            return ResponseEntity.noContent().build(); // Return 204 No Content
        }
        return ResponseEntity.notFound().build(); // Return 404 if user does not exist
    }
}