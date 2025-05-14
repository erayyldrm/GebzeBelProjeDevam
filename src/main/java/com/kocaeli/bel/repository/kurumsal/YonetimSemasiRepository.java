package com.kocaeli.bel.repository.kurumsal;

import com.kocaeli.bel.model.kurumsal.YonetimSemasiEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface YonetimSemasiRepository extends JpaRepository<YonetimSemasiEntity, Long> {
    
    // Oracle için sıralama sorguları
    @Query(value = "SELECT y FROM YonetimSemasiEntity y ORDER BY y.pozisyon, y.siraNo ASC")
    List<YonetimSemasiEntity> findAllOrderByPositionAndOrder();
    
    @Query(value = "SELECT y FROM YonetimSemasiEntity y WHERE y.pozisyon = :pozisyon ORDER BY y.siraNo ASC")
    List<YonetimSemasiEntity> findByPozisyon(String pozisyon);
    
    // Oracle için Başkan pozisyonu sorgusu
    @Query(value = "SELECT y FROM YonetimSemasiEntity y WHERE y.pozisyon = 'Başkan' ORDER BY y.siraNo ASC")
    List<YonetimSemasiEntity> findBaskan();
    
    // Oracle için Başkan Yardımcısı pozisyonu sorgusu
    @Query(value = "SELECT y FROM YonetimSemasiEntity y WHERE y.pozisyon = 'Başkan Yardımcısı' ORDER BY y.siraNo ASC")
    List<YonetimSemasiEntity> findBaskanYardimcilari();
    
    // Başkan Danışmanı pozisyonu sorgusu
    @Query(value = "SELECT y FROM YonetimSemasiEntity y WHERE y.pozisyon = 'Başkan Danışmanı' ORDER BY y.siraNo ASC")
    List<YonetimSemasiEntity> findBaskanDanismanlari();
    
    // ID ile sorgu
    @Override
    Optional<YonetimSemasiEntity> findById(Long id);
}
