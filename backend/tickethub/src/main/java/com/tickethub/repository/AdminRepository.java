package com.tickethub.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
	Optional<Admin> findByEmailAndPassword(String em, String pwd);
}
