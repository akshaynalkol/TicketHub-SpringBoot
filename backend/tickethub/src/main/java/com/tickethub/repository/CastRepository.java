package com.tickethub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.Cast;
import com.tickethub.entities.Movie;

public interface CastRepository extends JpaRepository<Cast, Long> {
	
}
