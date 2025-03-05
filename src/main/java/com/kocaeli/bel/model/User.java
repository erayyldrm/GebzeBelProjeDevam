package com.kocaeli.bel.model;

import jakarta.persistence.*;

// User Entity (Updated)
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
@Entity
@Table(name = "KULLANICILAR")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;
    @Column(unique = false)
    private String password;
    @Column(unique = true)
    private String email;

    public User(Long id, String username, String password, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public User(String password, String username) {
        this.password = password;
        this.username = username;
    }

    public User() {

    }

}
