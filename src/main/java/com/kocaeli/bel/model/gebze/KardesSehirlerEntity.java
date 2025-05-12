package com.kocaeli.bel.model.gebze;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "GEBZE_KARDESSEHIRLER") // Türkçe karakter 'İ' düzeltildi
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

    @Column(name = "ULKE", length = 100) // 'ÜLKE' → 'ULKE' yapıldı
    private String country;

    // Yardımcı metot: Türkiye olup olmadığını kontrol eder
    public boolean isDomestic() {
        return "Türkiye".equalsIgnoreCase(country); // Büyük/küçük harf duyarsız hale getirildi
    }
}
