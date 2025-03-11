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



    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /*
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Find your user entity and convert to Spring Security's UserDetails
        return userRepository.findByUsername(username)
                .map(user -> new org.springframework.security.core.userdetails.User(
                        user.getUsername(),
                        user.getPassword(),
                        // Add authorities/roles as needed
                        getAuthorities(user)
                ))
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }
    private Collection<? extends GrantedAuthority> getAuthorities(User user) {
        // Convert your user roles to Spring Security authorities
        return user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))
                .collect(Collectors.toList());
    }
*/
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Find your user entity
        User user = userRepository.findByTCNo(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));

        // Create a UserDetails object with basic authorities
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getTCNo())
                .password(user.getPassword())
                .authorities("USER") // Basic authority, no roles
                .build();
    }


}
