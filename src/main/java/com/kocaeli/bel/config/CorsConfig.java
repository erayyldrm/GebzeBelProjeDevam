package com.kocaeli.bel.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**") // Sadece "/api" ile başlayan endpointler için izin ver
                        .allowedOrigins("http://localhost:5173", "http://localhost:5174") // Birden fazla kaynağa izin ver
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // HTTP metodlarına izin
                        .allowedHeaders("*") // Tüm header'lara izin ver
                        .allowCredentials(true); // Kimlik doğrulama bilgileri (Cookies, Authorization) kabul edilir
            }
        };
    }
}