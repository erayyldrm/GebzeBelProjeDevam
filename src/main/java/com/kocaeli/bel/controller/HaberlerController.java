package com.kocaeli.bel.controller;

import com.kocaeli.bel.model.haberler;
import com.kocaeli.bel.service.HaberlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/haberler")
public class HaberlerController {

    @Autowired
    private HaberlerService haberlerService;

    @GetMapping
    public List<haberler> getAllHaberler() {
        return haberlerService.getAllHaberler();
    }

    @GetMapping("/{id}")
    public ResponseEntity<haberler> getHaberlerById(@PathVariable Long id) {
        Optional<haberler> haberler = haberlerService.getHaberlerById(id);
        return haberler.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public haberler createHaberler(@RequestBody haberler haberler) {
        return haberlerService.createHaberler(haberler);
    }

    @PutMapping("/{id}")
    public ResponseEntity<haberler> updateHaberler(@PathVariable Long id, @RequestBody haberler haberlerDetails) {
        haberler updatedHaberler = haberlerService.updateHaberler(id, haberlerDetails);
        if (updatedHaberler != null) {
            return ResponseEntity.ok(updatedHaberler);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteHaberler(@PathVariable Long id) {
        boolean isDeleted = haberlerService.deleteHaberler(id);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}