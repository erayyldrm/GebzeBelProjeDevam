package com.kocaeli.bel.DTO;

import lombok.*;

@Data
public class UserDTO {
    private Long id;
    private String tcno;
    private String isim;
    private String password;
    private String status;
    private String yetkilerJson;



    public UserDTO(Long id, String tcno, String isim, String password, String status, String yetkilerJson) {
        this.id = id;
        this.tcno = tcno;
        this.isim = isim;
        this.password = password;
        this.status = status;
        this.yetkilerJson = yetkilerJson;
    }


    public UserDTO(Long id, String tcno, String isim, String status, String yetkilerJson) {
        this.id = id;
        this.tcno = tcno;
        this.isim = isim;
        this.status = status;
        this.yetkilerJson = yetkilerJson;
    }

    public UserDTO() {
    }
}
