package com.tickethub.service;

import java.util.List;

import com.tickethub.dto.ApiResponse;
import com.tickethub.dto.UserDTO;
import com.tickethub.entities.User;

public interface UserService {
	// Add method to add user details
	String addNewUser(UserDTO userDTO);
	
	// Add method to signin user
	UserDTO authenticateUser(UserDTO dto);

	//Add method to get all users
	List<UserDTO> getAllUsers();

	// Update user details
	ApiResponse updateUserDetails(Long userId, User user);

	boolean checkEmailExists(String email);

	boolean validatePhone(String phone);    
	
}
