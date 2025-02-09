package com.tickethub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.tickethub.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminDTO extends BaseDTO {
	private String name;
	private String email;
	private Role role;
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;
}
