package com.tickethub.service;

import com.tickethub.dto.AdminDTO;
import com.tickethub.dto.LoginRequestDTO;

public interface AdminService {
	AdminDTO authenticateAdmin(LoginRequestDTO dto);
}
