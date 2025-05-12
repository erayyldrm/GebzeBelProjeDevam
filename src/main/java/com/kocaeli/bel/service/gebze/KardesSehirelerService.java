package com.kocaeli.bel.service.gebze;

import com.kocaeli.bel.DTO.gebze.KardesSehirlerDTO;
import com.kocaeli.bel.model.gebze.KardesSehirlerEntity;
import com.kocaeli.bel.repository.gebze.KardesSehirlerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class KardesSehirelerService {

    private final KardesSehirlerRepository kardesSehirlerRepository;

    /**
     * Get all sister cities (both domestic and international)
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
