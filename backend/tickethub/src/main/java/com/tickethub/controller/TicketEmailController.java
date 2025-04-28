//package com.tickethub.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import com.tickethub.dto.BookingDTO;
//import com.tickethub.dto.BookingResponseDTO;
//import com.tickethub.entities.EmailDetails;
//import com.tickethub.service.BookingService;
//import com.tickethub.service.EmailService;
//import com.tickethub.service.TicketServiceImpl;
//
//@RestController
//@RequestMapping("/ticket-email")
//@CrossOrigin(origins = "http://localhost:5173")
//public class TicketEmailController<BookingRequestDTO> {
//
//	@Autowired
//	private BookingService bookingService;
//
//	@Autowired
//	private TicketServiceImpl ticketService;
//
//	@Autowired
//	private EmailService emailService;
//
//	@PostMapping("/book-and-send")
//	public ResponseEntity<String> bookTicketAndSendEmail(@RequestBody BookingDTO bookingRequest) {
//		// Step 1: Save booking details
//		BookingResponseDTO booking = bookingService.bookTicket(bookingRequest);   
//
//		// Step 2: Generate ticket as a PDF
//		byte[] pdfBytes = ticketService.generateTicketPdf(
//				booking.getUser().getName(),
//				booking.getShowtime().getMovie().getTitle(),
//				booking.getBookingDate().toString(),
//				String.valueOf(booking.getNoOfSeat()),
//				booking.getShowtime().getTheater().getLocation(),
//				String.valueOf(booking.getShowtime().getAmount()));
//
//		// Step 3: Prepare Email Details
//		EmailDetails emailDetails = new EmailDetails();
//		emailDetails.setRecipient(booking.getUser().getEmail());
//		emailDetails.setSubject("Your Ticket Confirmation - " + booking.getShowtime().getMovie().getTitle());
//		emailDetails.setMsgBody("Dear " + booking.getUser().getName() + ",\n\nYour booking is confirmed.\n\n"
//				+ "Please find your ticket attached.\n\nThank you for choosing us!");
//
//		// Step 4: Send Email with Attachment
//		String emailStatus = emailService.sendMailWithAttachment(emailDetails, pdfBytes);
//
//		return ResponseEntity.ok("Ticket booked successfully and sent to email! Status: " + emailStatus);
//	}
//}