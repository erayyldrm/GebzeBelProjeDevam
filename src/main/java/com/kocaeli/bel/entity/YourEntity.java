package com.kocaeli.bel.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "employees")
public class YourEntity {

    // Getters and Setters
    @Id
    private Long id;
    private String Ad;

    @Override
    public String toString() {
        return "YourEntity{" +
                "id=" + id +
                ", column1='" + Ad + '\'' +
                '}';
    }
}