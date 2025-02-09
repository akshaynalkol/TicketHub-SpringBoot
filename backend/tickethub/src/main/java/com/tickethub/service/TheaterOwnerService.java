package com.tickethub.service;

import java.util.List;

import com.tickethub.dto.ApiResponse;
import com.tickethub.dto.MovieDTO;
import com.tickethub.dto.TheaterOwnerDTO;


public interface TheaterOwnerService {

	List<TheaterOwnerDTO> getAllTheaterOwner();
	
	ApiResponse deleteTheaterOwnerDetails(Long ownerId);	    
	
	TheaterOwnerDTO getTheaterOwneById(long id);   
}
