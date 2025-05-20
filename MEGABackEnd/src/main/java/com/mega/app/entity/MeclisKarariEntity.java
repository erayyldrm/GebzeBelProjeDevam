package com.mega.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "meclis_kararlari")
@AllArgsConstructor
@NoArgsConstructor
public class MeclisKarariEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String baslik;
    
    @Column(nullable = false)
    private String dosyaUrl;
    
    @Column(nullable = false)
    private LocalDate tarih;
    
    @Column(columnDefinition = "integer default 1")
    private int aktif;
    
    @Column(length = 20)
    private String kategori;
}
