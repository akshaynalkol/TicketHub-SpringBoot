package com.tickethub.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmailAndPassword(String em, String pwd);

	Optional<User> findByEmail(String email);

	Optional<User> findByPhone(String phone);
}