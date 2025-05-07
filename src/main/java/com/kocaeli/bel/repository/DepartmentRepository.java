package com.kocaeli.bel.repository;

import com.kocaeli.bel.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    // Add custom methods if needed
}
