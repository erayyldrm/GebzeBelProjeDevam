package com.kocaeli.bel.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "GEBZE_KARDESSEHİRLER")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class KardesSehirlerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "BAYRAKIKON", length = 150)
    private String flagUrl;

    @Column(name = "BELEDIYEISIM", length = 255)
    private String municipalityName;

    @Column(name = "SEHIR", length = 250)
    private String city;

    @Column(name = "ÜLKE", length = 100)
    private String country;

    // Helper method to determine if this is a domestic city (Türkiye)
    public boolean isDomestic() {
        return "Türkiye".equals(country);
    }
}