package com.kocaeli.bel.repository.kurumsal;

import com.kocaeli.bel.model.kurumsal.MeclisKarariEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MeclisKarariRepository extends JpaRepository<MeclisKarariEntity, Long> {

    // JPQL: Entity alan adları kullanılmalı
    @Query("SELECT m FROM MeclisKarariEntity m WHERE m.aktif = 1 ORDER BY m.tarih DESC")
    List<MeclisKarariEntity> findAllActiveOrderByTarihDesc();

    // Native sorgu ile test için
    @Query(value = "SELECT * FROM MECLIS_KARARLARI_KURUMSAL_KIMLIK WHERE aktif = 1 ORDER BY tarih DESC", nativeQuery = true)
    List<MeclisKarariEntity> findAllActiveNative();

    @Query("SELECT m FROM MeclisKarariEntity m WHERE m.kategori = :kategori AND m.aktif = :aktif ORDER BY m.tarih DESC")
    List<MeclisKarariEntity> findByKategoriAndAktifOrderByTarihDesc(String kategori, int aktif);

    @Query("SELECT m FROM MeclisKarariEntity m WHERE m.id = :id")
    Optional<MeclisKarariEntity> findById(Long id);
}
