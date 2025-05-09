package com.kocaeli.bel.DTO;

import lombok.*;

@Data
public class UserDTO {
    private Long id;
    private String tcno;
    private String isim;
    private String password;
    private String role;
    private String status;

    public UserDTO(String tcno, Long idno, String password, String role) {
        this.tcno = tcno;
        this.id = idno;
        this.password = password;
        this.role = role;
    }

    public UserDTO(Long idno, String tcno) {
        this.id = idno;
        this.tcno = tcno;
    }

    public UserDTO(Long idno, String tcno, String role) {
        this.id = idno;
        this.tcno = tcno;
        this.role = role;
    }

    public UserDTO(String status, String role, String password, String isim, String tcno, Long id) {
        this.status = status;
        this.role = role;
        this.password = password;
        this.isim = isim;
        this.tcno = tcno;
        this.id = id;
    }

    public UserDTO() {

    }
}
