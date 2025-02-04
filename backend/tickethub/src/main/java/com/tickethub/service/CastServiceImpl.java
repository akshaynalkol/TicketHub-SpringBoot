package com.tickethub.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.tickethub.dto.CastDTO;
import com.tickethub.repository.CastRepository;

public class CastServiceImpl implements CastService {
	@Autowired
	private CastRepository castRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public CastDTO getMoviesByType(String type) {
		return null;
	}

}
