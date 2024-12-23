package com.tickethub.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.tickethub.dto.MovieDTO;
import com.tickethub.dto.ResponseCastDTO;
import com.tickethub.dto.ResponseDTO;
import com.tickethub.entities.Cast;
import com.tickethub.entities.Movie;
import com.tickethub.entities.MovieCast;
import com.tickethub.repository.CastRepository;
import com.tickethub.repository.MovieCastRepository;
import com.tickethub.repository.MovieRepository;

@Service
public class MovieServiceImpl {
	@Autowired
	private MovieRepository movieRepository;
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private CastRepository castRepository;
	@Autowired
	private MovieCastRepository movieCastRepository;

	public void fetchAndSaveMovies() {
		// Replace with the actual API URL
		String apiUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=4d00e354677d7037dca04151cd23a174&language=en-US&page=1";

		// Fetch data from the third-party API
		ResponseDTO response = restTemplate.getForObject(apiUrl, ResponseDTO.class);
		System.out.println(response);

		// Save the fetched data to the database
		if (response != null) {
			MovieDTO[] movies = response.getResults();
			if (movies != null && movies.length > 0) {
				for (MovieDTO movie : movies) {
					Movie newMovie = modelMapper.map(movie, Movie.class);

					String castApiUrl = "https://api.themoviedb.org/3/movie/" + movie.getMovieId()
							+ "/credits?api_key=4d00e354677d7037dca04151cd23a174&language=en-US";
					ResponseCastDTO responseCast = restTemplate.getForObject(castApiUrl, ResponseCastDTO.class);
					System.out.println(responseCast);

					MovieCast movieCast = new MovieCast();

					Arrays.stream(responseCast.getCrew())
							.filter(crewDTO -> "Director".equalsIgnoreCase(crewDTO.getJob())).forEach(crewDTO -> {
								movieCast.setDirector(crewDTO.getName());
							});

					Arrays.stream(responseCast.getCrew()).filter(crewDTO -> "Writer".equalsIgnoreCase(crewDTO.getJob()))
							.forEach(crewDTO -> {
								movieCast.setWriter(crewDTO.getName());
							});

//					movieCastRepository.save(movieCast);

					if (responseCast != null && responseCast.getCast() != null) {
						List<Cast> castList = Arrays.stream(responseCast.getCast()).map(castDTO -> {
							Cast cast = new Cast();
							cast.setCastId(castDTO.getId());
							cast.setName(castDTO.getName());
							cast.setProfile_path(castDTO.getProfile_path());
							return cast;
						}).collect(Collectors.toList());

						System.out.println(castList);

//						castRepository.saveAll(castList);
						movieCast.setCasts(castList);
					}
					System.out.println(movieCast);

					newMovie.setMovieCasts(movieCast);
					System.out.println(newMovie);
					movieRepository.save(newMovie);
				}
			}
		}
	}
}
