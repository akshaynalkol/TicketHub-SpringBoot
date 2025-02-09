package com.tickethub.service;

public interface PaymentService {
	String createOrder(Long bookingId, double amount);

	void updatePaymentStatus(String orderId, String transactionId);
}
