package com.kocaeli.bel.model;

import jakarta.persistence.Entity;
import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
@Table(name = "DUYURULAR")
public class Kategori {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "BASLIK", length = 300)
    private String baslik;
}
