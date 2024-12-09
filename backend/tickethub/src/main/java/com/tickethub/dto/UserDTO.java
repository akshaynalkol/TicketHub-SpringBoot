package com.tickethub.dto;

import java.time.LocalDate;

import com.tickethub.entities.Gender;
import com.tickethub.entities.MaritalStatus;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO extends BaseDTO {
	private String name;
	private String email;
	private String phone;
	private LocalDate dob;
	private Gender gender;
	private MaritalStatus maritalStatus;
	private String password;
}
