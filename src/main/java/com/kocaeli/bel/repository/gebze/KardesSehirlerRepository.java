package com.kocaeli.bel.repository.gebze;
import com.kocaeli.bel.entity.KardesSehirlerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface KardesSehirlerRepository {
    // Find all sister cities in Turkey
    List<KardesSehirlerEntity> findByCountry(String country);

    // Find all sister cities not in Turkey (for international cities)
    List<KardesSehirlerEntity> findByCountryNot(String country);

    List<KardesSehirlerEntity> findAll();
}
