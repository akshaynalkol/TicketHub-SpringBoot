package com.tickethub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tickethub.dto.ApiResponse;
import com.tickethub.dto.UserDTO;
import com.tickethub.entities.User;
import com.tickethub.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/signup")
	public ResponseEntity<?> addNewUser(@RequestBody UserDTO userDTO) {
		System.out.println("In addNewUser " + userDTO);

		return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(userService.addNewUser(userDTO)));
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody UserDTO userDTO) {
		System.out.println("In authenticateUser " + userDTO);

		UserDTO userDTOResp = userService.authenticateUser(userDTO);
		return ResponseEntity.ok(userDTOResp);
	}

	@GetMapping("/getAllUsers")
	public ResponseEntity<?> getAllUsers() {
		System.out.println("in get all users");
		List<UserDTO> users = userService.getAllUsers();
		if (users.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.status(HttpStatus.OK).body(users);
	}

	@PutMapping("/updateUser/{userId}")
	public ResponseEntity<?> updateUserDetails(@PathVariable Long userId, @RequestBody User user) {
		System.out.println("in update user details " + userId + " " + user);

		return ResponseEntity.ok(userService.updateUserDetails(userId, user));

	}

	@GetMapping("/validateEmail")
	public ResponseEntity<?> validateEmail(@RequestParam String email) {
		System.out.println("Validating email: " + email);
		boolean emailExists = userService.checkEmailExists(email);
		if (emailExists) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email is already in use.");
		}
		return ResponseEntity.ok("Email is available.");
	}

	@GetMapping("/validatePhone")
	public ResponseEntity<?> validatePhone(@RequestParam String phone) {
		boolean isPhoneExists = userService.validatePhone(phone);
		if (isPhoneExists) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Phone number already in use"));
		} else {
			return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Phone number is available"));
		}
	}
}