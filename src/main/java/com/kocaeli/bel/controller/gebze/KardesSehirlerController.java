package com.kocaeli.bel.controller.gebze;

import com.kocaeli.bel.DTO.gebze.KardesSehirlerDTO;
import com.kocaeli.bel.service.gebze.KardesSehirelerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/kardes-sehirler")
@RequiredArgsConstructor
public class KardesSehirlerController {

    private final KardesSehirelerService kardesSehirelerService;

    /**
     * Get all sister cities (merged and sorted by ID)
     */
    @GetMapping
    public ResponseEntity<List<KardesSehirlerDTO>> getAllSisterCitiesSortedById() {
        List<KardesSehirlerDTO> allCities = kardesSehirelerService.getAllSisterCities();

        // Sadece ID'si 1-14 arasında olanları al, ID'ye göre sırala
        List<KardesSehirlerDTO> filteredAndSorted = allCities.stream()
                .filter(dto -> dto.getId() >= 1 && dto.getId() <= 14)
                .sorted(Comparator.comparing(KardesSehirlerDTO::getId)) // <-- düzeltildi
                .collect(Collectors.toList());

        return ResponseEntity.ok(filteredAndSorted);
    }

}
