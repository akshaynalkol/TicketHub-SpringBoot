package com.tickethub.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User extends BaseEntity {
	@Column(length = 25)
	private String name;
	@Column(length = 30, unique = true)
	private String email;   
	@Column(length = 25, unique = true)
	private String phone;
	private LocalDate dob;
	@Enumerated(EnumType.STRING)
	private Gender gender;  
	@Enumerated(EnumType.STRING)  
	private MaritalStatus maritalStatus;     
	@Column(length = 50)
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Role role=Role.USER;    
}
