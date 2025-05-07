package com.kocaeli.bel.DTO.gebze;
import lombok.*;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class tarihiyerlerDTO {
    private Long id;
    private String yerIsmi;
    private String resimUrl;
    private String konum;
    private String genelBilgi;
    private String aktiviteler;
    private String nasilGidilir;
    private String galeri;

    public tarihiyerlerDTO(Long id) {
        this.id = id;
    }
}
