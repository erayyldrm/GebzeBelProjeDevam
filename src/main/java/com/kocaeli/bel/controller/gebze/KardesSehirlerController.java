package com.kocaeli.bel.controller.gebze;
import com.kocaeli.bel.DTO.gebze.KardesSehirlerDTO;
import com.kocaeli.bel.service.gebze.KardesSehirelerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/kardes-sehirler")
@RequiredArgsConstructor
public class KardesSehirlerController {
    private final KardesSehirelerService kardesSehirlerService;

    /**
     * Get all sister cities categorized by domestic and international
     */
    @GetMapping
    public ResponseEntity<Map<String, List<KardesSehirlerDTO>>> getAllSisterCities() {
        Map<String, List<KardesSehirlerDTO>> response = new HashMap<>();
        response.put("domestic", kardesSehirlerService.getDomesticMunicipalities());
        response.put("international", kardesSehirlerService.getInternationalMunicipalities());
        return ResponseEntity.ok(response);
    }

    /**
     * Get only domestic sister cities
     */
    @GetMapping("/domestic")
    public ResponseEntity<List<KardesSehirlerDTO>> getDomesticSisterCities() {
        return ResponseEntity.ok(kardesSehirlerService.getDomesticMunicipalities());
    }

    /**
     * Get only international sister cities
     */
    @GetMapping("/international")
    public ResponseEntity<List<KardesSehirlerDTO>> getInternationalSisterCities() {
        return ResponseEntity.ok(kardesSehirlerService.getInternationalMunicipalities());
    }
}
