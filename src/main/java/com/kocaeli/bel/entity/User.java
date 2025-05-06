package com.kocaeli.bel.entity;

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
    private String TCNo;
    @Column()
    private String password;
    @Column()
    private String role;

    public User(String role, String TCNo, String password) {
        this.role = role;
        this.TCNo = TCNo;
        this.password = password;
    }

    public User(Long id, String TCNo, String password) {
        this.id = id;
        this.TCNo = TCNo;
        this.password = password;
    }

    public User(String password, String TCNo) {
        this.password = password;
        this.TCNo = TCNo;
    }

    public User() {

    }


}
