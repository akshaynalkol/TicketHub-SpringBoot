package com.tickethub.controller;

import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tickethub.dto.BookingResponseDTO;
import com.tickethub.repository.BookingRepository;
import com.tickethub.service.BookingService;
import com.tickethub.service.TicketServiceImpl;

@RestController
@RequestMapping("/tickets")
@CrossOrigin(origins = "http://localhost:5173")
public class TicketController {

	private final TicketServiceImpl ticketService;

	@Autowired
	private BookingService bookingService;

	public TicketController(TicketServiceImpl ticketService) {
		this.ticketService = ticketService;
	}

	@GetMapping("/download/{bookingId}")
	public ResponseEntity<byte[]> downloadTicket(@PathVariable String bookingId) {
		BookingResponseDTO booking = bookingService.getBookingById(Integer.parseInt(bookingId));

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

		// Dummy ticket data (Fetch from DB in real use case)
		byte[] pdfBytes = ticketService.generateTicketPdf(booking.getUser().getName(),
				booking.getShowtime().getMovie().getTitle(), booking.getBookingDate().format(formatter),
				String.valueOf(booking.getNoOfSeat()), booking.getShowtime().getTheater().getLocation(),
				String.valueOf(booking.getShowtime().getAmount()));

		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ticket_" + bookingId + ".pdf")
				.contentType(MediaType.APPLICATION_PDF).body(pdfBytes);
	}
}
