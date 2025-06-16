package com.kocaeli.bel.service;

import com.kocaeli.bel.model.haberler;
import com.kocaeli.bel.repository.HaberlerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HaberlerService {

    @Autowired
    private HaberlerRepository haberlerRepository;

    public List<haberler> getAllHaberler() {
        return haberlerRepository.findAll();
    }

    public Optional<haberler> getHaberlerById(Long id) {
        return haberlerRepository.findById(id);
    }

    public haberler createHaberler(haberler haberler) {
        return haberlerRepository.save(haberler);
    }

    public haberler updateHaberler(Long id, haberler haberlerDetails) {
        Optional<haberler> haberler = haberlerRepository.findById(id);
        if (haberler.isPresent()) {
            haberler.get().setBaslik(haberlerDetails.getBaslik());
            haberler.get().setTarih(haberlerDetails.getTarih());
            haberler.get().setAciklama(haberlerDetails.getAciklama());
            haberler.get().setResim1(haberlerDetails.getResim1());
            haberler.get().setResim2(haberlerDetails.getResim2());
            return haberlerRepository.save(haberler.get());
        } else {
            return null;
        }
    }

    public boolean deleteHaberler(Long id) {
        if (haberlerRepository.existsById(id)) {
            haberlerRepository.deleteById(id);
            return true;
        }
        return false;
    }
}