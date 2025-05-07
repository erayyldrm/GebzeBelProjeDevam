package com.kocaeli.bel.service;


import com.kocaeli.bel.repository.gebze.TarihiYerRepository;
import com.kocaeli.bel.model.gebze.TarihiYerler;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TarihiYerService {

    @Autowired
    private TarihiYerRepository tarihiYerRepository;


    //List <TarihiYerler> şeyi Entity class'ın kendisi
    public List<TarihiYerler> tumTarihiYerleriGetir() {
        return tarihiYerRepository.findAll();
    }

    public Optional<TarihiYerler> idIleTarihiYerGetir(Long id) {
        return tarihiYerRepository.findById(id);
    }

    public List<TarihiYerler> isimIleTarihiYerAra(String yerIsmi) {
        return tarihiYerRepository.findByYerIsmiContainingIgnoreCase(yerIsmi);
    }

    public List<TarihiYerler> konumIleTarihiYerAra(String konum) {
        return tarihiYerRepository.findByKonumContainingIgnoreCase(konum);
    }

    public TarihiYerler tarihiYerKaydet(TarihiYerler tarihiYer) {
        return tarihiYerRepository.save(tarihiYer);
    }

    public void tarihiYerSil(Long id) {
        tarihiYerRepository.deleteById(id);
    }

    public TarihiYerler tarihiYerGuncelle(TarihiYerler tarihiYer) {
        return tarihiYerRepository.save(tarihiYer);
    }
}
