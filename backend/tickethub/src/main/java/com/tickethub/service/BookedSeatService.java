package com.tickethub.service;

import java.util.List;

import com.tickethub.dto.BookedSeatDTO;

public interface BookedSeatService {
	List<BookedSeatDTO> getAllSeatsByShowtimeId(Long showtimeId);
}
