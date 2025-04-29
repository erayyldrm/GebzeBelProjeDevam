package com.kocaeli.bel.DTO;

import lombok.*;

@Getter
@Setter
public class UserDTO {
    private Long idno;
    private String tcno;
    private String password;
    private String role;

    public UserDTO(String tcno, Long idno, String password, String role) {
        this.tcno = tcno;
        this.idno = idno;
        this.password = password;
        this.role = role;
    }

    public UserDTO(Long idno, String tcno) {
        this.idno = idno;
        this.tcno = tcno;
    }

    public UserDTO(Long idno, String tcno, String role) {
        this.idno = idno;
        this.tcno = tcno;
        this.role = role;
    }
}
