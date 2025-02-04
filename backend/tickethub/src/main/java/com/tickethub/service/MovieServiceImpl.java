package com.tickethub.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tickethub.dto.MovieCastDTO;
import com.tickethub.dto.MovieDTO;
import com.tickethub.entities.Movie;
import com.tickethub.entities.MovieCast;
import com.tickethub.repository.MovieRepository;

@Service
@Transactional
public class MovieServiceImpl implements MovieService {
	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<MovieDTO> getMoviesByType(String type) {
		return movieRepository.findByType(type).stream().map(movie -> modelMapper.map(movie, MovieDTO.class))
				.collect(Collectors.toList());
	}

	public MovieCastDTO getMovieCastByMovieId(long id) {
		return movieRepository.findById(id)
	            .map(movie -> {
	                MovieCast movieCast = movie.getMovieCasts();
	                // Ensure cast is fetched
//	                movieCast.getCasts().size();  
	                return modelMapper.map(movieCast, MovieCastDTO.class);
	            })
	            .orElse(null);
	}

	@Override
	public MovieDTO getMoviesById(long id) {
	    return movieRepository.findById(id)
	            .map(movie -> modelMapper.map(movie, MovieDTO.class)) 
	            .orElse(null);  
	}
}
