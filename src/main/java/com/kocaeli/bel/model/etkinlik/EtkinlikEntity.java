package com.kocaeli.bel.model.etkinlik;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "etkinlikler")
@Data
public class EtkinlikEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "baslik")
    private String baslik;

    @Column(name = "tarih")
    @Temporal(TemporalType.DATE)
    private LocalDate tarih; // YYYY-MM-DD

    @Column(name = "resim_url")
    private String resimUrl;

    @Column(name = "aciklama")
    private String aciklama;

    @Column(name = "delta")
    private Integer delta; // 1: aktif, 0: pasif

}
