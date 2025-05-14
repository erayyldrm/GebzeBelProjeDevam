package com.kocaeli.bel.model.kurumsal;

import jakarta.persistence.*;

@Entity
@Table(name = "KURUMSAL_MECLIS_ESKIBASKANLAR")
public class MeclisUyesiEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "isim_soyisim", nullable = false)
    private String isimSoyisim;
    
    @Column(name = "resim_url", nullable = true)
    private String resimUrl;
    
    @Column(name = "gorev", nullable = true)
    private String gorev;
    
    @Column(name = "sira_no", nullable = true)
    private Integer siraNo;
    
    // Getters and setters
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
    
    public String getGorev() {
        return gorev;
    }
    
    public void setGorev(String gorev) {
        this.gorev = gorev;
    }
    
    public Integer getSiraNo() {
        return siraNo;
    }
    
    public void setSiraNo(Integer siraNo) {
        this.siraNo = siraNo;
    }
}
