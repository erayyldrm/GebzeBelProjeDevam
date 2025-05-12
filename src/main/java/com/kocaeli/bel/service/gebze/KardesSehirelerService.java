package com.kocaeli.bel.service.gebze;
import com.kocaeli.bel.DTO.gebze.KardesSehirlerDTO;
import com.kocaeli.bel.entity.KardesSehirlerEntity;
import com.kocaeli.bel.repository.gebze.KardesSehirlerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class KardesSehirelerService {
    private final KardesSehirlerRepository kardesSehirlerRepository;

    @Autowired
    public KardesSehirelerService(KardesSehirlerRepository kardesSehirlerRepository) {
        this.kardesSehirlerRepository = kardesSehirlerRepository;
    }

    /**
     * Get all domestic sister cities (cities within Turkey)
     */
    public List<KardesSehirlerDTO> getDomesticMunicipalities() {
        List<KardesSehirlerEntity> entities = kardesSehirlerRepository.findByCountry("Türkiye");
        return entities.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    /**
     * Get all international sister cities (cities outside Turkey)
     */
    public List<KardesSehirlerDTO> getInternationalMunicipalities() {
        List<KardesSehirlerEntity> entities = kardesSehirlerRepository.findByCountryNot("Türkiye");
        return entities.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    /**
     * Get all sister cities
     */
    public List<KardesSehirlerDTO> getAllMunicipalities() {
        List<KardesSehirlerEntity> entities = kardesSehirlerRepository.findAll();
        return entities.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    /**
     * Convert entity to DTO
     */
    private KardesSehirlerDTO convertToDto(KardesSehirlerEntity entity) {
        KardesSehirlerDTO dto = new KardesSehirlerDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getMunicipalityName());
        dto.setCity(entity.getCity());
        dto.setCountry(entity.getCountry());
        dto.setFlag(entity.getFlagUrl());
        return dto;
    }
}
