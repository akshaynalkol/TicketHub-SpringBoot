package com.tickethub.service;

import com.tickethub.dto.BookingDTO;
import com.tickethub.entities.Booking;

public interface BookingService {
	Booking createBooking(BookingDTO bookingRequest);
}
