package com.tickethub.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tickethub.dto.BookedSeatDTO;
import com.tickethub.repository.BookedSeatRepository;

@Service
public class BookedSeatServiceImpl implements BookedSeatService {

	@Autowired
	private BookedSeatRepository bookedSeatRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<BookedSeatDTO> getAllSeatsByShowtimeId(Long showtimeId) {
		return bookedSeatRepository.findByShowtimeId(showtimeId).stream()
				.map(bookedSeat -> modelMapper.map(bookedSeat, BookedSeatDTO.class)).collect(Collectors.toList());
	}
}
