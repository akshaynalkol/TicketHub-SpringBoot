package com.tickethub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
	Payment findByOrderId(String orderId); // Add this method

}
