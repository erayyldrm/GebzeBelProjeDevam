package com.kocaeli.bel.service;

import com.kocaeli.bel.model.User;
import com.kocaeli.bel.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service // Spring tarafından otomatik olarak bileşen olarak tanınmasını sağlar
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Spring Security tarafından çağrılır. Verilen kullanıcı adı (bizim durumumuzda TCNo),
     * veritabanında aranır ve eğer bulunursa UserDetails nesnesi döner.
     * Bu nesne kimlik doğrulamada kullanılır.
     *
     * @param username TCNo bilgisini temsil eder
     * @return UserDetails Spring Security'nin anlayacağı formatta kullanıcı bilgisi
     * @throws UsernameNotFoundException kullanıcı bulunamazsa fırlatılır
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Hata ayıklama amacıyla log
        System.out.println("Attempting to load user: " + username);

        // TCNo ile kullanıcıyı bul (username yerine TCNo kullanılıyor)
        User user = userRepository.findByTCNo(username)
                .orElseThrow(() -> {
                    System.out.println("User not found with TCNo: " + username);
                    return new UsernameNotFoundException("User not found with TCNo: " + username);
                });

        // Kullanıcı bulunduğunda log
        System.out.println("User found: " + user.getTCNo() + ", role: " + user.getRole());

        // Spring Security'nin anlayacağı UserDetails nesnesi döner
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getTCNo()) // kullanıcı adı olarak TCNo atanıyor
                .password(user.getPassword()) // hashlenmiş şifre
                .roles(user.getRole()) // rol bilgisi örn: "USER", "ADMIN"
                .build();
    }
}
