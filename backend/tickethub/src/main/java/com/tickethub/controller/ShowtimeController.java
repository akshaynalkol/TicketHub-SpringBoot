package com.tickethub.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickethub.dto.ShowtimeDTO;
import com.tickethub.service.ShowtimeService;

@RestController
@RequestMapping("/showtimes")
@CrossOrigin(origins = "http://localhost:5173") // Adjust as needed
public class ShowtimeController {

	private final ShowtimeService showtimeService;

	public ShowtimeController(ShowtimeService showtimeService) {
		this.showtimeService = showtimeService;
	}

	// Get showtimes for a specific movie
	@GetMapping("/movie/{movieId}")
	public List<ShowtimeDTO> getShowtimesByMovie(@PathVariable Long movieId) {
		return showtimeService.getShowtimesByMovie(movieId);
	}
}
