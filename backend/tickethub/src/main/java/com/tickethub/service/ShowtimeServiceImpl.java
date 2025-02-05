package com.tickethub.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tickethub.dto.ShowtimeDTO;
import com.tickethub.repository.ShowtimeRepository;

@Service
public class ShowtimeServiceImpl implements ShowtimeService {
	@Autowired
	private ShowtimeRepository showtimeRepository;
	@Autowired
	private ModelMapper modelMapper;

	public List<ShowtimeDTO> getShowtimesByMovie(Long movieId) {
		return showtimeRepository.findByMovieId(movieId).stream()
				.map(showtime -> modelMapper.map(showtime, ShowtimeDTO.class)).collect(Collectors.toList());
	}

}
