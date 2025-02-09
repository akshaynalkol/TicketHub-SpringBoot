package com.tickethub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickethub.dto.TheaterOwnerDTO;
import com.tickethub.service.TheaterOwnerService;

@RestController
@RequestMapping("/theaterowner")
@CrossOrigin(origins = "http://localhost:5173")
public class TheaterOwnerController {
	@Autowired
	private TheaterOwnerService theaterOwnerService;

	@GetMapping("/getAllUsers")
	public ResponseEntity<?> getAlOwners() {
		System.out.println("in get all users");
		List<TheaterOwnerDTO> theaterOwner = theaterOwnerService.getAllTheaterOwner();
		if (theaterOwner.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.status(HttpStatus.OK).body(theaterOwner);
	}

	@DeleteMapping("/deleteUser/{ownerId}")
	public ResponseEntity<?> deleteTheaterOwnerDetails(@PathVariable Long ownerId) {
		System.out.println("in delete owner details " + ownerId);

		return ResponseEntity.ok(theaterOwnerService.deleteTheaterOwnerDetails(ownerId));
	}

	@GetMapping("/{id}")
	public TheaterOwnerDTO getTheaterOwnerById(@PathVariable long id) {
		return theaterOwnerService.getTheaterOwneById(id);
	}

}
