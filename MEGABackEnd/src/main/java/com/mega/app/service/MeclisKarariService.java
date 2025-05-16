package com.mega.app.service;

import com.mega.app.entity.MeclisKarariEntity;
import com.mega.app.repository.MeclisKarariRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MeclisKarariService {

    private final MeclisKarariRepository meclisKarariRepository;

    @Autowired
    public MeclisKarariService(MeclisKarariRepository meclisKarariRepository) {
        this.meclisKarariRepository = meclisKarariRepository;
    }

    public List<MeclisKarariEntity> getAllActive() {
        return meclisKarariRepository.findAllActiveOrderByTarihDesc();
    }

    public List<MeclisKarariEntity> getByKategori(String kategori) {
        return meclisKarariRepository.findByKategoriAndAktifOrderByTarihDesc(kategori, 1);
    }

    public Optional<MeclisKarariEntity> getById(Long id) {
        return meclisKarariRepository.findById(id);
    }

    public MeclisKarariEntity save(MeclisKarariEntity meclisKarari) {
        return meclisKarariRepository.save(meclisKarari);
    }

    public void delete(Long id) {
        meclisKarariRepository.deleteById(id);
    }
}
