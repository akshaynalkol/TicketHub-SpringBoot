package com.tickethub.service;

import java.util.List;

import com.tickethub.dto.ShowtimeDTO;

public interface ShowtimeService {
	List<ShowtimeDTO> getShowtimesByMovie(Long movieId);
}
