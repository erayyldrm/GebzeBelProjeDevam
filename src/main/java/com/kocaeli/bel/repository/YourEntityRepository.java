package com.kocaeli.bel.repository;

import com.kocaeli.bel.entity.YourEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface YourEntityRepository extends JpaRepository<YourEntity, Long> {
}