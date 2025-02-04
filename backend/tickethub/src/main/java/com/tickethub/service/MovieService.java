package com.tickethub.service;

import java.util.List;

import com.tickethub.dto.MovieCastDTO;
import com.tickethub.dto.MovieDTO;

public interface MovieService {
	List<MovieDTO> getMoviesByType(String type);

	MovieCastDTO getMovieCastByMovieId(long id);

	MovieDTO getMoviesById(long id);
}
