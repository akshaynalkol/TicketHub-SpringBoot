package com.tickethub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickethub.service.RestTemplatempl;

@RestController
public class RestTemplateController {
	@Autowired
	private RestTemplatempl movieService;

	@GetMapping("/movies")
	public String syncEmployees() {
		movieService.fetchAndSaveMovies();  
		return "Movies fetched and saved successfully!";
	}
}
