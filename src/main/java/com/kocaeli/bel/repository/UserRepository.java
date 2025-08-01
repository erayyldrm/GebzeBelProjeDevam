package com.kocaeli.bel.repository;

import com.kocaeli.bel.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByTCNo(String TCNo);
    boolean existsByTCNo(String TCNo);

}