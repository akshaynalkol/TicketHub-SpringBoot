package com.tickethub.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tickethub.service.TicketServiceImpl;

@RestController
@RequestMapping("/tickets")
@CrossOrigin(origins = "http://localhost:5173")
public class TicketController {  

    private final TicketServiceImpl ticketService;

    public TicketController(TicketServiceImpl ticketService) {
        this.ticketService = ticketService;
    }
  
    @GetMapping("/download/{bookingId}")
    public ResponseEntity<byte[]> downloadTicket(@PathVariable String bookingId) {
        // Dummy ticket data (Fetch from DB in real use case)
        byte[] pdfBytes = ticketService.generateTicketPdf("Akshay", "Concert Night", "10th Feb 2025", "A12", "Mumbai Stadium", "₹999");

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ticket_" + bookingId + ".pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdfBytes);
    }
}
