package com.kocaeli.bel.controller.gebze;
import com.kocaeli.bel.DTO.gebze.KardesSehirlerDTO;
import com.kocaeli.bel.service.gebze.KardesSehirlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/kardes-sehirler")
@CrossOrigin(origins = "*") // Add this to allow cross-origin requests if needed
public class KardesSehirlerController {
    private final KardesSehirlerService service;

    @Autowired
    public KardesSehirlerController(KardesSehirlerService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<KardesSehirlerDTO>> getAllCities() {
        return ResponseEntity.ok(service.getAllCities());
    }

    @GetMapping("/api/kardes-sehirler")
    public ResponseEntity<List<KardesSehirlerDTO>> getDomesticCities() {
        return ResponseEntity.ok(service.getDomesticCities());
    }

    @GetMapping("/api/kardes-sehirler")
    public ResponseEntity<List<KardesSehirlerDTO>> getInternationalCities() {
        return ResponseEntity.ok(service.getInternationalCities());
    }

    @PostMapping
    public ResponseEntity<KardesSehirlerDTO> createCity(@RequestBody KardesSehirlerDTO cityDTO) {
        return ResponseEntity.ok(service.createCity(cityDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCity(@PathVariable Long id) {
        service.deleteCity(id);
        return ResponseEntity.noContent().build();
    }

}
