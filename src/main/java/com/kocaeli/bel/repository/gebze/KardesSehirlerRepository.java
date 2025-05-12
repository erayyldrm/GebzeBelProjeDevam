package com.kocaeli.bel.repository.gebze;

import com.kocaeli.bel.model.gebze.KardesSehirlerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KardesSehirlerRepository extends JpaRepository<KardesSehirlerEntity, Long> {
    // Tüm şehirleri sorgular
}
