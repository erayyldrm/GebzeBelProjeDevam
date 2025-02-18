package com.kocaeli.bel.service;

import com.kocaeli.bel.entity.YourEntity;
import com.kocaeli.bel.repository.YourEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class YourEntityService {

    @Autowired
    private YourEntityRepository repository;

    public Optional<YourEntity> getEntityById(Long id) {
        return repository.findById(id);
    }
}