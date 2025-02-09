package com.tickethub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickethub.dto.BookingDTO;
import com.tickethub.dto.BookingResponseDTO;
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

	@GetMapping("/getAllUsers")
	public ResponseEntity<?> getAllBookings() {
		System.out.println("in get all users");
		List<BookingResponseDTO> theaterOwner = bookingService.getAllBookings();
		if (theaterOwner.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.status(HttpStatus.OK).body(theaterOwner);
	}

	@DeleteMapping("/deleteUser/{bookingId}")
	public ResponseEntity<?> deleteBookingDetails(@PathVariable Long bookingId) {
		System.out.println("in delete booking details " + bookingId);

		return ResponseEntity.ok(bookingService.deleteBookingDetails(bookingId));
	}

	@GetMapping("/{id}")
	public BookingResponseDTO getTheaterOwnerById(@PathVariable long id) {
		return bookingService.getBookingById(id);   
	}

	@GetMapping("/user/{userId}")
	public ResponseEntity<List<BookingResponseDTO>> getBookingsByUser(@PathVariable Long userId) {
		List<BookingResponseDTO> bookings = bookingService.getBookingsByUser(userId);  
		return ResponseEntity.ok(bookings);    
	}
}
