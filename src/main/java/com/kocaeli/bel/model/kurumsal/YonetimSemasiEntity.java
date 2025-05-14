package com.kocaeli.bel.model.kurumsal;

import jakarta.persistence.*;

@Entity
@Table(name = "kurumsal_yonetim_semasi")
public class YonetimSemasiEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "yonetimSemasiSeq")
    @SequenceGenerator(name = "yonetimSemasiSeq", sequenceName = "YONETIM_SEMASI_SEQ", allocationSize = 1)
    private Long id;
    
    @Column(name = "isim_soyisim", nullable = false)
    private String isimSoyisim;
    
    @Column(name = "resim_url", nullable = true)
    private String resimUrl;
    
    @Column(name = "pozisyon", nullable = false)
    private String pozisyon;
    
    @Column(name = "sira_no", nullable = true)
    private Integer siraNo;
    
    @Lob
    @Column(name = "mudurlukler", nullable = true)
    private String mudurlukler;
    
    // Eklenen alanlar
    @Column(name = "email", nullable = true)
    private String email;
    
    @Column(name = "telefon", nullable = true)
    private String telefon;
    
    @Column(name = "biyografi", nullable = true)
    private String biyografi;
    
    // Getters ve setters
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getIsimSoyisim() {
        return isimSoyisim;
    }
    
    public void setIsimSoyisim(String isimSoyisim) {
        this.isimSoyisim = isimSoyisim;
    }
    
    public String getResimUrl() {
        return resimUrl;
    }
    
    public void setResimUrl(String resimUrl) {
        this.resimUrl = resimUrl;
    }
    
    public String getPozisyon() {
        return pozisyon;
    }
    
    public void setPozisyon(String pozisyon) {
        this.pozisyon = pozisyon;
    }
    
    public Integer getSiraNo() {
        return siraNo;
    }
    
    public void setSiraNo(Integer siraNo) {
        this.siraNo = siraNo;
    }
    
    public String getMudurlukler() {
        return mudurlukler;
    }
    
    public void setMudurlukler(String mudurlukler) {
        this.mudurlukler = mudurlukler;
    }
    
    // Yeni alanlar için getter ve setterlar
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getTelefon() {
        return telefon;
    }
    
    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }
    
    public String getBiyografi() {
        return biyografi;
    }
    
    public void setBiyografi(String biyografi) {
        this.biyografi = biyografi;
    }
}
