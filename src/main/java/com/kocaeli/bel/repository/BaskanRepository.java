package com.kocaeli.bel.repository;
import com.kocaeli.bel.model.kurumsal.BaskanEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface BaskanRepository extends JpaRepository<BaskanEntity, Long> {

    // Find only active records (delta=1)
    @Query("SELECT b FROM BaskanEntity b WHERE b.delta = 1")
    List<BaskanEntity> findAllActive();

    // Find active record - possibly used for the main mayor display
    @Query("SELECT b FROM BaskanEntity b WHERE b.delta = 1")
    Optional<BaskanEntity> findActiveBaskan();

    // Find specific active record by ID
    @Query("SELECT b FROM BaskanEntity b WHERE b.id = ?1 AND b.delta = 1")
    Optional<BaskanEntity> findActiveById(Long id);

    // Find all inactive records (delta=0)
    @Query("SELECT b FROM BaskanEntity b WHERE b.delta = 0")
    List<BaskanEntity> findAllInactive();
}