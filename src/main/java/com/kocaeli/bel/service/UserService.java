package com.kocaeli.bel.service;

import com.kocaeli.bel.DTO.LoginResponse;
import com.kocaeli.bel.DTO.UserDTO;
import com.kocaeli.bel.model.User;
import com.kocaeli.bel.repository.UserRepository;
import com.kocaeli.bel.exception.UserAlreadyExistsException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service // Bu sınıfın bir servis katmanı olduğunu belirtir (iş mantığı burada yazılır)
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Veritabanındaki tüm kullanıcıları UserDTO biçiminde döner (şifre gibi hassas bilgiler hariç)
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(user -> new UserDTO(user.getId(), user.getTCNo(),user.getIsim(), user.getRole(),user.getStatus() ))
                .toList();
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
        System.out.println("Registering user with TCNO: " + user.getTCNo());
        System.out.println("Password before encoding: " + user.getPassword());
        if (userRepository.findByTCNo(user.getTCNo()).isPresent()) {
            throw new UserAlreadyExistsException("TCNO is already in use");
        }

        // Şifreyi hash'le
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // Şifreyi kontrol ederek kimlik doğrulama yapar (şifre karşılaştırması yapılır)
    public User authenticateUser(String username, String rawPassword) {
        return userRepository.findByTCNo(username)
                .filter(user -> passwordEncoder.matches(rawPassword, user.getPassword()))
                .orElseThrow(() -> new UsernameNotFoundException("Invalid username or password"));
    }
}
