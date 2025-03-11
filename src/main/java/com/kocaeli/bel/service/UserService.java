package com.kocaeli.bel.service;

import com.kocaeli.bel.DTO.LoginResponse;
import com.kocaeli.bel.model.User;
import com.kocaeli.bel.repository.UserRepository;
import com.kocaeli.bel.exception.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public boolean existsById(Long id) {
        return userRepository.existsById(id);
    }

    public Optional<User> authenticate(String email) {
        return userRepository.findByTCNo(email);
    }
    public User registerUser(User user) {
        // Ensure email is unique
        if (userRepository.findByTCNo(user.getTCNo()).isPresent()) {
            throw new UserAlreadyExistsException("TCNO is already in use");
        }

        // Encode password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User authenticateUser(String username, String rawPassword) {
        return userRepository.findByTCNo(username)
                .filter(user -> passwordEncoder.matches(rawPassword, user.getPassword()))
                .orElseThrow(() -> new UsernameNotFoundException("Invalid username or password"));
    }
    public LoginResponse login(String username, String rawPassword) {
        User user = authenticateUserRaw(username, rawPassword);

        // Generate token (dummy token for example purposes)
        String token = "dummyToken123";

        // Return login response
        return new LoginResponse(token, user.getTCNo());
    }

    public User authenticateUserRaw(String username, String rawPassword) {
        return userRepository.findByTCNo(username)
                .filter(user -> rawPassword.equals(user.getPassword()))
                .orElseThrow(() -> new UsernameNotFoundException("Invalid username or password"));
    }
}


