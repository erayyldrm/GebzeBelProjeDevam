package com.kocaeli.bel.service;
import com.kocaeli.bel.model.kurumsal.BaskanEntity;
import com.kocaeli.bel.repository.BaskanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BaskanService {
    private final BaskanRepository baskanRepository;

    @Autowired
    public BaskanService(BaskanRepository baskanRepository) {
        this.baskanRepository = baskanRepository;
    }

    // Get the active mayor (primary method for frontend)
    public Optional<BaskanEntity> getActiveBaskan() {
        return baskanRepository.findActiveBaskan();
    }

    // Activate a mayor entity by setting delta to 1 and deactivate others
    public void activateBaskan(Long id) {
        // First, deactivate all current active mayors
        List<BaskanEntity> activeBaskanList = baskanRepository.findAllActive();
        for (BaskanEntity baskan : activeBaskanList) {
            baskan.setDelta(0);
            baskanRepository.save(baskan);
        }

        // Then activate the specified mayor
        Optional<BaskanEntity> baskanOpt = baskanRepository.findById(id);
        if (baskanOpt.isPresent()) {
            BaskanEntity baskan = baskanOpt.get();
            baskan.setDelta(1);
            baskanRepository.save(baskan);
        }
    }

    // Get only active mayor data by ID
    public Optional<BaskanEntity> getActiveBaskanById(Long id) {
        return baskanRepository.findActiveById(id);
    }

    // Get all active mayor entries
    public List<BaskanEntity> getAllActiveBaskan() {
        return baskanRepository.findAllActive();
    }

    // Get all inactive mayor entries
    public List<BaskanEntity> getAllInactiveBaskan() {
        return baskanRepository.findAllInactive();
    }

    // Get all mayor entries (regardless of delta)
    public List<BaskanEntity> getAllBaskan() {
        return baskanRepository.findAll();
    }

    // Get raw entity by ID (regardless of delta)
    public Optional<BaskanEntity> getBaskanById(Long id) {
        return baskanRepository.findById(id);
    }

    // Create or update mayor entity
    public BaskanEntity saveBaskan(BaskanEntity baskan) {
        // If this is a new entry without delta set, default to inactive
        if (baskan.getDelta() == null) {
            baskan.setDelta(0);
        }
        return baskanRepository.save(baskan);
    }

    // Create or update mayor entity and set as active (deactivating others)
    public BaskanEntity saveAndActivateBaskan(BaskanEntity baskan) {
        // First deactivate all current active mayors
        List<BaskanEntity> activeBaskanList = baskanRepository.findAllActive();
        for (BaskanEntity activeBaskan : activeBaskanList) {
            activeBaskan.setDelta(0);
            baskanRepository.save(activeBaskan);
        }

        // Set this one as active
        baskan.setDelta(1);
        return baskanRepository.save(baskan);
    }

    // Soft delete a mayor entity by setting delta to 0
    public void deactivateBaskan(Long id) {
        Optional<BaskanEntity> baskanOpt = baskanRepository.findById(id);
        if (baskanOpt.isPresent()) {
            BaskanEntity baskan = baskanOpt.get();
            baskan.setDelta(0);
            baskanRepository.save(baskan);
        }
    }

    // Hard delete a mayor entity (remove from database)
    public void deleteBaskan(Long id) {
        baskanRepository.deleteById(id);
    }
}