package com.kocaeli.bel.model.gebze;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "TARİHİ_YERLER")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TarihiYerler {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "RESIM_URL")
    private String resimUrl;

    @Column(name = "YER_ISMI",  length = 150)
    private String yerIsmi;

    @Column(name = "GENEL_BILGI")
    private String genelBilgi;

    @Column(name = "KONUM", length = 500)
    private String konum;

    @Column(name = "AKTIVITELER")
    private String aktiviteler;

    @Column(name = "NASIL_GIDILIR")
    private String nasilGidilir;

    @Column(name = "GALERI", length = 2000)
    private String galeri; // JSON formatında resim URL'leri tutulabilir

}
