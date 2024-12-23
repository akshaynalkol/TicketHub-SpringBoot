package com.tickethub.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ResponseCastDTO {
	private Long id;
	private CastDTO[] cast;
	private CrewDTO[] crew;	
}
