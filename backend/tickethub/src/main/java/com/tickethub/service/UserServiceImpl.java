package com.tickethub.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tickethub.custom_exceptions.ResourceNotFoundException;
import com.tickethub.dto.ApiResponse;
import com.tickethub.dto.UserDTO;
import com.tickethub.entities.User;
import com.tickethub.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userDao;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public String addNewUser(UserDTO userDTO) {      
		User newUser = modelMapper.map(userDTO, User.class);
		User persistentUser = userRepository.save(newUser);
		return "User SignIn Succesfully!!";
	}

	@Override
	public UserDTO authenticateUser(UserDTO dto) {
		Optional<User> optional = userDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
		User user = optional.orElseThrow(() -> new ResourceNotFoundException("Invalid Email & Password!!"));
		return modelMapper.map(user, UserDTO.class);  
	}

	@Override
	public List<UserDTO> getAllUsers() {

		return userDao.findAll().stream().map(user -> modelMapper.map(user, UserDTO.class))  
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse updateUserDetails(Long userId, User user) {
		if (userDao.existsById(userId)) {
			User updatedUser = userDao.save(user);
			return new ApiResponse("Updated User Details !!!");
		}
		return new ApiResponse("Invalid User Id !!!");
	}

	@Override
	public boolean checkEmailExists(String email) {
		return userDao.findByEmail(email).isPresent();
	}

	@Override
	public boolean validatePhone(String phone) {
		Optional<User> user = userDao.findByPhone(phone);
		return user.isPresent();
	}
}