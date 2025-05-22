package com.kocaeli.bel.model.etkinlik;

import jakarta.persistence.*;

@Entity
@Table(name = "etkinlikler")
public class EtkinlikEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "baslik")
    private String baslik;

    @Column(name = "tarih")
    private String tarih; // YYYY-MM-DD

    @Column(name = "resim_url")
    private String resimUrl;

    @Column(name = "aciklama")
    private String aciklama;

    @Column(name = "delta")
    private Integer delta; // 1: aktif, 0: pasif

    // Getter ve Setter'lar
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBaslik() { return baslik; }
    public void setBaslik(String baslik) { this.baslik = baslik; }

    public String getTarih() { return tarih; }
    public void setTarih(String tarih) { this.tarih = tarih; }

    public String getResimUrl() { return resimUrl; }
    public void setResimUrl(String resimUrl) { this.resimUrl = resimUrl; }

    public String getAciklama() { return aciklama; }
    public void setAciklama(String aciklama) { this.aciklama = aciklama; }

    public Integer getDelta() { return delta; }
    public void setDelta(Integer delta) { this.delta = delta; }
}
