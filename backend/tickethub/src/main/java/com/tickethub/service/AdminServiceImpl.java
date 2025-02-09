package com.tickethub.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tickethub.custom_exceptions.ResourceNotFoundException;
import com.tickethub.dto.AdminDTO;
import com.tickethub.dto.LoginRequestDTO;
import com.tickethub.entities.Admin;
import com.tickethub.repository.AdminRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public AdminDTO authenticateAdmin(LoginRequestDTO dto) {
		Optional<Admin> optional = adminRepository.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
		Admin admin = optional.orElseThrow(() -> new ResourceNotFoundException("Invalid Email & Password!!"));
		return modelMapper.map(admin, AdminDTO.class);
	}
}
