package com.tickethub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickethub.dto.MovieCastDTO;
import com.tickethub.dto.MovieDTO;
import com.tickethub.entities.Movie;
import com.tickethub.entities.MovieCast;
import com.tickethub.service.MovieService;

@RestController
@RequestMapping("/movie")
@CrossOrigin(origins = "http://localhost:5173")
public class MovieController {
	@Autowired
	private MovieService movieService;
     
	@GetMapping("/{type}/type")
	public List<MovieDTO> getMoviesByType(@PathVariable String type) {
		return movieService.getMoviesByType(type);
	}
	
	@GetMapping("/{id}")     
	public MovieDTO getMoviesById(@PathVariable long id) {
		return movieService.getMoviesById(id);                        
	}      
	
	@GetMapping("/{id}/cast")     
	public MovieCastDTO getMovieCastByMovieId(@PathVariable long id) {
		return movieService.getMovieCastByMovieId(id);                     
	}     
}
