package com.tickethub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.Cast;

public interface CastRepository extends JpaRepository<Cast, Long> {

}
