package com.tickethub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickethub.dto.BookedSeatDTO;
import com.tickethub.service.BookedSeatService;

@RestController
@RequestMapping("/booked-seats")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend access
public class BookedSeatController {  
	@Autowired
	private BookedSeatService bookedSeatService;  

	@GetMapping("/showtime/{showtimeId}")
	public List<BookedSeatDTO> getBookedSeatsByShowtime(@PathVariable Long showtimeId) {
		return bookedSeatService.getAllSeatsByShowtimeId(showtimeId);       
	}
}
