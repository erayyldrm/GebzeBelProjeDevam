package com.kocaeli.bel.repository.gebze;

// 2. Repository Interface

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kocaeli.bel.model.gebze.TarihiYerler;

@Repository
public interface TarihiYerRepository extends JpaRepository<TarihiYerler, Long> {
    //List <TarihiYerler> şeyi Entity class'ın kendisi
    List<TarihiYerler> findByYerIsmiContainingIgnoreCase(String yerIsmi);

    List<TarihiYerler> findByKonumContainingIgnoreCase(String konum);
}