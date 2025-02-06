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
import com.tickethub.entities.EmailDetails;
import com.tickethub.entities.User;
import com.tickethub.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
    private EmailService emailService;

	@Override
	public String addNewUser(UserDTO userDTO) {      
		User newUser = modelMapper.map(userDTO, User.class);
		User persistentUser = userRepository.save(newUser);
		
		// Send Welcome Email
        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setRecipient(userDTO.getEmail());
        emailDetails.setSubject("Welcome to TicketHub!");
        emailDetails.setMsgBody("Hello " + userDTO.getName() + ",\n\nThank you for signing up at TicketHub! We are excited to have you on board.\n\nBest Regards,\nTicketHub Team");
		
        emailDetails.setAttachment("");
        //emailDetails.setAttachment("D:/CDAC/TICKETHUB PROJECT/SendEmail/QP-WJP.pdf");
        
        emailService.sendMailWithAttachment(emailDetails);
        
        //emailService.sendSimpleMail(emailDetails);
        
		return "User SignIn Succesfully!!";
	}

	@Override
	public UserDTO authenticateUser(UserDTO dto) {
		Optional<User> optional = userRepository.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
		User user = optional.orElseThrow(() -> new ResourceNotFoundException("Invalid Email & Password!!"));
		return modelMapper.map(user, UserDTO.class);
	}

	@Override
	public List<UserDTO> getAllUsers() {

		return userRepository.findAll().stream().map(user -> modelMapper.map(user, UserDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse updateUserDetails(Long userId, User user) {
		if (userRepository.existsById(userId)) {
			userRepository.save(user);          
			return new ApiResponse("Updated User Details !!!");
		}
		return new ApiResponse("Invalid User Id !!!");
	}

	@Override
	public boolean checkEmailExists(String email) {
		return userRepository.findByEmail(email).isPresent();
	}

	@Override
	public boolean validatePhone(String phone) {
		Optional<User> user = userRepository.findByPhone(phone);
		return user.isPresent();
	}
}