package com.kocaeli.bel.DTO.gebze;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object for Sister Cities
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class KardesSehirlerDTO {
    private Long id;            // Veritabanı ID'si
    private String name;        // Belediye ismi
    private String city;        // Şehir adı
    private String country;     // Ülke adı
    private String flag;        // Bayrak URL'si
}
