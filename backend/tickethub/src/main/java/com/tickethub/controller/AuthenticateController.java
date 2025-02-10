package com.tickethub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickethub.custom_exceptions.ResourceNotFoundException;
import com.tickethub.dto.AdminDTO;
import com.tickethub.dto.ApiResponse;
import com.tickethub.dto.LoginRequestDTO;
import com.tickethub.dto.TheaterOwnerDTO;
import com.tickethub.dto.UserDTO;
import com.tickethub.service.AdminService;
import com.tickethub.service.OTPServiceImpl;
import com.tickethub.service.TheaterOwnerService;
import com.tickethub.service.UserService;

@RestController
//@RequestMapping("/signin")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticateController {
	@Autowired
	private UserService userService;

	@Autowired
	private AdminService adminService;

	@Autowired
	private TheaterOwnerService theaterOwnerService;

	@Autowired
	private OTPServiceImpl otpService;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequestDTO loginRequest) {
	    System.out.println("In authenticateUser " + loginRequest);

	    try {
	        AdminDTO admin = adminService.authenticateAdmin(loginRequest);
	        if (admin != null) {
	            otpService.sendOTP(admin.getEmail());
	            return ResponseEntity.ok(new ApiResponse("OTP sent to your email.", admin));
	        }
	    } catch (ResourceNotFoundException e) {
	        // Ignore and continue checking next role 
	    }

	    try {
	        TheaterOwnerDTO owner = theaterOwnerService.authenticateOwner(loginRequest);
	        if (owner != null) {
	            otpService.sendOTP(owner.getEmail());
	            return ResponseEntity.ok(new ApiResponse("OTP sent to your email.", owner));
	        }
	    } catch (ResourceNotFoundException e) {
	        // Ignore and continue checking next role
	    }

	    try {
	        UserDTO user = userService.authenticateUser(loginRequest);
	        if (user != null) {
	            otpService.sendOTP(user.getEmail());
	            return ResponseEntity.ok(new ApiResponse("OTP sent to your email.", user));
	        }
	    } catch (ResourceNotFoundException e) {
	        // Ignore and return final error if no users are found
	    }

	    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Invalid email or password"));
	}


}
