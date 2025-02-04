package com.tickethub.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tickethub.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

	List<Movie> findByType(String type); 
}
