package com.tickethub.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tickethub.dto.ApiResponse;
import com.tickethub.dto.BookingDTO;
import com.tickethub.dto.BookingResponseDTO;
import com.tickethub.dto.TheaterOwnerDTO;
import com.tickethub.entities.BookedSeat;
import com.tickethub.entities.Booking;
import com.tickethub.entities.Showtime;
import com.tickethub.entities.User;
import com.tickethub.repository.BookedSeatRepository;
import com.tickethub.repository.BookingRepository;
import com.tickethub.repository.ShowtimeRepository;
import com.tickethub.repository.UserRepository;

@Service
public class BookingServiceImpl implements BookingService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ShowtimeRepository showtimeRepository;
	@Autowired
	private BookingRepository bookingRepository;    
	@Autowired
	private BookedSeatRepository bookedSeatRepository;
	@Autowired     
	private ModelMapper modelMapper;

	public Booking createBooking(BookingDTO bookingRequest) {
		User user = userRepository.findById(bookingRequest.getUser())
				.orElseThrow(() -> new RuntimeException("Showtime not found"));
		Showtime showtime = showtimeRepository.findById(bookingRequest.getShowtime())
				.orElseThrow(() -> new RuntimeException("Showtime not found"));

		Booking booking = new Booking();
		booking.setShowtime(showtime); // Assign the fetched showtime
		booking.setUser(user);
		booking.setNoOfSeat(bookingRequest.getNoOfSeat());
		booking.setBookingDate(bookingRequest.getBookingDate());

		// Save the booking
		Booking savedBooking = bookingRepository.save(booking);

		// Create and save booked seats
		List<BookedSeat> bookedSeats = bookingRequest.getSeatNumbers().stream().map(seatNo -> {
			BookedSeat bookedSeat = new BookedSeat();
			bookedSeat.setSeatNo(seatNo); // Set seat number
			bookedSeat.setBooking(savedBooking);
			bookedSeat.setShowtime(savedBooking.getShowtime());
			return bookedSeat;
		}).toList();

		bookedSeatRepository.saveAll(bookedSeats);

		return savedBooking;
	}
	
	@Override
	public List<BookingResponseDTO> getAllBookings() {
		return bookingRepository.findAll().stream()      
				.map(booking -> modelMapper.map(booking, BookingResponseDTO.class)).collect(Collectors.toList());
	}
	
	@Override
	public ApiResponse deleteBookingDetails(Long bookingId) {
		if (bookingRepository.existsById(bookingId)) {
			bookingRepository.deleteById(bookingId);
			return new ApiResponse("Deleted Owner Details !!!");
		}
		return new ApiResponse("Invalid Owner Id !!!");
	}

	
}
