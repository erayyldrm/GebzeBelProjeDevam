package com.kocaeli.bel.controller.gebze;


import java.util.List;
import java.util.Optional;

import com.kocaeli.bel.service.TarihiYerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.kocaeli.bel.model.gebze.TarihiYerler;

@RestController
@RequestMapping("/api/tarihi-yerler")
public class tarihiyerlerController {

    @Autowired
    private TarihiYerService tarihiYerService;

    @GetMapping
    public ResponseEntity<List<TarihiYerler>> tumTarihiYerleriGetir() {
        List<TarihiYerler> tarihiYerler = tarihiYerService.tumTarihiYerleriGetir();
        return new ResponseEntity<>(tarihiYerler, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TarihiYerler> tarihiYerGetir(@PathVariable Long id) {
        Optional<TarihiYerler> tarihiYer = tarihiYerService.idIleTarihiYerGetir(id);
        return tarihiYer.map(tarihiYerler -> new ResponseEntity<>(tarihiYerler, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/ara/isim")
    public ResponseEntity<List<TarihiYerler>> isimIleAra(@RequestParam String yerIsmi) {
        List<TarihiYerler> tarihiYerler = tarihiYerService.isimIleTarihiYerAra(yerIsmi);
        return new ResponseEntity<>(tarihiYerler, HttpStatus.OK);
    }

    @GetMapping("/ara/konum")
    public ResponseEntity<List<TarihiYerler>> konumIleAra(@RequestParam String konum) {
        List<TarihiYerler> tarihiYerler = tarihiYerService.konumIleTarihiYerAra(konum);
        return new ResponseEntity<>(tarihiYerler, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TarihiYerler> tarihiYerOlustur(@RequestBody TarihiYerler tarihiYer) {
        TarihiYerler yeniTarihiYer = tarihiYerService.tarihiYerKaydet(tarihiYer);
        return new ResponseEntity<>(yeniTarihiYer, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TarihiYerler> tarihiYerGuncelle(@PathVariable Long id, @RequestBody TarihiYerler tarihiYer) {
        Optional<TarihiYerler> mevcutTarihiYer = tarihiYerService.idIleTarihiYerGetir(id);
        if (mevcutTarihiYer.isPresent()) {
            tarihiYer.setId(id);
            TarihiYerler guncellenmisTarihiYer = tarihiYerService.tarihiYerGuncelle(tarihiYer);
            return new ResponseEntity<>(guncellenmisTarihiYer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> tarihiYerSil(@PathVariable Long id) {
        Optional<TarihiYerler> tarihiYer = tarihiYerService.idIleTarihiYerGetir(id);
        if (tarihiYer.isPresent()) {
            tarihiYerService.tarihiYerSil(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}