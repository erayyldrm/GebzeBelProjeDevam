package com.kocaeli.bel.DTO.gebze;

import lombok.*;

// Lombok anotasyonları:
// @Data: Getter, Setter, toString, equals ve hashCode metotlarını otomatik oluşturur
// @NoArgsConstructor: Parametresiz kurucu metot oluşturur
// @AllArgsConstructor: Tüm alanlar için kurucu metot oluşturur
// Not: @Data zaten @Getter ve @Setter içerdiği için @Getter ve @Setter ekstra yazılmamalıdır

@Data
@NoArgsConstructor
@AllArgsConstructor
public class tarihiyerlerDTO {

    private Long id;                 // Tarihi yerin benzersiz kimliği
    private String yerIsmi;         // Tarihi yerin adı
    private String resimUrl;        // Ana görselin URL'si
    private String konum;           // Yerleşim bilgisi veya adres
    private String genelBilgi;      // Genel açıklama / tanıtım yazısı
    private String aktiviteler;     // Yapılabilecek etkinlikler
    private String nasilGidilir;    // Ulaşım bilgileri
    private String galeri;          // Galeri görselleri (virgülle ayrılmış linkler veya JSON dizisi)

    // Yalnızca ID içeren bir kurucu metot
    public tarihiyerlerDTO(Long id) {
        this.id = id;
    }
}
