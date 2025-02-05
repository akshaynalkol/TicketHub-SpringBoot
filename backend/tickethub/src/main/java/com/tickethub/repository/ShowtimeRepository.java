package com.tickethub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.Showtime;

public interface ShowtimeRepository extends JpaRepository<Showtime, Long> {
	List<Showtime> findByMovieId(Long movieId);
}
