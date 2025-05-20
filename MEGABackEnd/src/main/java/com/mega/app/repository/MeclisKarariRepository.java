package com.mega.app.repository;

import com.mega.app.entity.MeclisKarariEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeclisKarariRepository extends JpaRepository<MeclisKarariEntity, Long> {

    // Aktif kararları tarihe göre azalan sırada getir
    @Query("SELECT m FROM MeclisKarariEntity m WHERE m.aktif = 1 ORDER BY m.tarih DESC")
    List<MeclisKarariEntity> findAllActiveOrderByTarihDesc();
    
    // Kategori filtresine göre aktif kararları getir
    List<MeclisKarariEntity> findByKategoriAndAktifOrderByTarihDesc(String kategori, int aktif);
}
