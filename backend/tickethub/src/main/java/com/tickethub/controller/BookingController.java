package com.tickethub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickethub.dto.BookingDTO;
import com.tickethub.entities.Booking;
import com.tickethub.service.BookingService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/bookings")
public class BookingController {

	@Autowired
	private BookingService bookingService;

	@PostMapping("/create")
	public ResponseEntity<Long> createBooking(@RequestBody BookingDTO bookingRequest) {
		Booking savedBooking = bookingService.createBooking(bookingRequest);
		return ResponseEntity.ok(savedBooking.getId());
	}
}
