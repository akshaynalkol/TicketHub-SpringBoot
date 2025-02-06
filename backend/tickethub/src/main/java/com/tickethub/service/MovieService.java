package com.tickethub.service;

import java.util.List;

import com.tickethub.dto.MovieCastDTO;
import com.tickethub.dto.MovieDTO;

public interface MovieService {
	List<MovieDTO> getMoviesByType(String type);

	MovieCastDTO getMovieCastByMovieId(long id);

	MovieDTO getMoviesById(long id);

	List<MovieDTO> searchMovies(String title);

	List<MovieDTO> getFilteredMovies(String status, String category, Double rating, String type);
}
