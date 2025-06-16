package com.kocaeli.bel.repository;

import com.kocaeli.bel.model.haberler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HaberlerRepository extends JpaRepository<haberler, Long> {
}