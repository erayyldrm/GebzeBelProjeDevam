package com.kocaeli.bel.model.gebze;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "GEBZE_TARIHIYERLER_AKTIVITELER")
public class TarihiYerler_Aktivite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tarihi_yer_id", nullable = false)
    private TarihiYerler tarihiYer;

    private String baslik;
    private String aciklama;
}

