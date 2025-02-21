package com.kocaeli.bel.model;

import jakarta.persistence.*;

@Entity
@Table(name="UZER") // Specify schema if necessary
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq_gen")
    @SequenceGenerator(
            name = "user_seq_gen",
            sequenceName = "USER_SEQ",          // Name of the sequence
            allocationSize = 1,                // Allocate IDs one by one to match the Oracle default
            schema = "C##MUSA"                 // Specify schema
    )
    @Column()
    private Long id;

    @Column(nullable = false) // Mark non-null fields
    private String name;

    @Column(unique = true, nullable = false) // Ensure unique and non-null for email
    private String email;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public User() {
    }
}