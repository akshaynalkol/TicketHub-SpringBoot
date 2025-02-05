package com.tickethub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
