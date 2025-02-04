package com.tickethub.service;

import com.tickethub.dto.CastDTO;

public interface CastService {
	CastDTO getMoviesByType(String type);
}
