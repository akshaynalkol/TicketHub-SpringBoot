package com.tickethub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tickethub.service.PaymentService;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {

	@Autowired    
	private PaymentService paymentService;

	@PostMapping("/create")
	public String createOrder(@RequestParam Long bookingId, @RequestParam double amount) {
		return paymentService.createOrder(bookingId, amount);
	}

	@PostMapping("/success")
	public void updatePaymentStatus(@RequestParam String orderId, @RequestParam String transactionId) {
		paymentService.updatePaymentStatus(orderId, transactionId);
	}
}
