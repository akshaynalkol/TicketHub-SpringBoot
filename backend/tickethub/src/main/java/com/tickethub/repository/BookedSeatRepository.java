package com.tickethub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.BookedSeat;

public interface BookedSeatRepository extends JpaRepository<BookedSeat, Long> {
	List<BookedSeat> findByShowtimeId(Long showtimeId);
}
