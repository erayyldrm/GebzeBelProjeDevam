package com.kocaeli.bel.service;

import com.kocaeli.bel.model.User;
import com.kocaeli.bel.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Add debug logging
        System.out.println("Attempting to load user: " + username);

        // Assume TCNo is the username
        User user = userRepository.findByTCNo(username)
                .orElseThrow(() -> {
                    System.out.println("User not found with TCNo: " + username);
                    return new UsernameNotFoundException("User not found with TCNo: " + username);
                });

        System.out.println("User found: " + user.getTCNo() + ", role: " + user.getRole());

        // Return a Spring Security UserDetails object
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getTCNo())
                .password(user.getPassword())
                .roles(user.getRole()) // assuming role is a String like "USER", "ADMIN"
                .build();
    }
}
