package com.tickethub.service;

import java.util.List;

import com.tickethub.dto.ApiResponse;
import com.tickethub.dto.BookingDTO;
import com.tickethub.dto.BookingResponseDTO;
import com.tickethub.dto.TheaterOwnerDTO;
import com.tickethub.entities.Booking;

public interface BookingService {
	Booking createBooking(BookingDTO bookingRequest);

	List<BookingResponseDTO> getAllBookings();

	ApiResponse deleteBookingDetails(Long bookingId);  
}
