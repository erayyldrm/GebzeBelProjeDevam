package com.mega.app.controller;

import com.mega.app.entity.MeclisKarariEntity;
import com.mega.app.service.MeclisKarariService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/kurumsal/meclis-kararlari")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MeclisKarariController {

    private final MeclisKarariService meclisKarariService;

    @Autowired
    public MeclisKarariController(MeclisKarariService meclisKarariService) {
        this.meclisKarariService = meclisKarariService;
    }

    @GetMapping
    public List<MeclisKarariEntity> getAllActive() {
        return meclisKarariService.getAllActive();
    }

    @GetMapping("/kategori/{kategori}")
    public List<MeclisKarariEntity> getByKategori(@PathVariable String kategori) {
        return meclisKarariService.getByKategori(kategori);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MeclisKarariEntity> getById(@PathVariable Long id) {
        return meclisKarariService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public MeclisKarariEntity create(@RequestBody MeclisKarariEntity meclisKarari) {
        return meclisKarariService.save(meclisKarari);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MeclisKarariEntity> update(@PathVariable Long id, @RequestBody MeclisKarariEntity meclisKarari) {
        return meclisKarariService.getById(id)
                .map(existingKarar -> {
                    meclisKarari.setId(id);
                    return ResponseEntity.ok(meclisKarariService.save(meclisKarari));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return meclisKarariService.getById(id)
                .map(existingKarar -> {
                    meclisKarariService.delete(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
