package com.kocaeli.bel.model;

import jakarta.persistence.*;

// User Entity (Updated)
import lombok.Data;


@Data
@Entity
@Table(name = "KULLANICILAR")
public class User {

    @Id
    @Column(name ="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="TCNO", unique = true)
    private String TCNo;
    @Column(name="ISIM")
    private String isim;
    @Column(name ="PASSWORD")
    private String password;
    @Column(name ="ROLE")
    private String role;
    @Column(name="STATUS")
    private String status;

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
