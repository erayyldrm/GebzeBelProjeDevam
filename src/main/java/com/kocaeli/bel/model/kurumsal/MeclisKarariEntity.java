package com.kocaeli.bel.model.kurumsal;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

@Entity
@Table(name = "MECLIS_KARARLARI_KURUMSAL_KIMLIK_KURUMSAL_RAPORLAR_KURUMSAL_DÖKÜMANLAR")
public class MeclisKarariEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String baslik;

    @Column(name = "dosya_url", nullable = false)
    private String dosyaUrl;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate tarih;

    @Column(columnDefinition = "integer default 1")
    private int aktif;

    @Column(length = 20)
    private String kategori;

    // Getter ve Setter'lar
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBaslik() { return baslik; }
    public void setBaslik(String baslik) { this.baslik = baslik; }

    public String getDosyaUrl() { return dosyaUrl; }
    public void setDosyaUrl(String dosyaUrl) { this.dosyaUrl = dosyaUrl; }

    public LocalDate getTarih() { return tarih; }
    public void setTarih(LocalDate tarih) { this.tarih = tarih; }

    public int getAktif() { return aktif; }
    public void setAktif(int aktif) { this.aktif = aktif; }

    public String getKategori() { return kategori; }
    public void setKategori(String kategori) { this.kategori = kategori; }
}
