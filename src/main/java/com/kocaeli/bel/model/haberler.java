package com.kocaeli.bel.model;

import jakarta.persistence.Entity;
import lombok.Data;
import jakarta.persistence.*;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "HABERLER")
public class haberler {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "BASLIK", length = 300)
    private String baslik;

    @Column(name= "TARIH")
    @Temporal(TemporalType.DATE)
    private LocalDate tarih;

    @Lob
    @Column(name="ACIKLAMA")
    private String aciklama;

    @Column(name = "RESIM1")
    private String resim1;

    @Column(name = "RESIM2")
    private String resim2;

    @Column(name ="KATEGORI_ID")
    private long kategori_id;

}
