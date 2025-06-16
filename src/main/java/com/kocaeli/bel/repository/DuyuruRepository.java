package com.kocaeli.bel.repository;

import com.kocaeli.bel.model.Duyuru;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DuyuruRepository extends JpaRepository<Duyuru, Long> {
}

