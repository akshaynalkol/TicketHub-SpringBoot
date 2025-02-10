package com.tickethub.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.TheaterOwner;
import com.tickethub.entities.User;

public interface TheaterOwnerRepository extends JpaRepository<TheaterOwner, Long> {
	Optional<TheaterOwner> findByEmailAndPassword(String em, String pwd);
}
