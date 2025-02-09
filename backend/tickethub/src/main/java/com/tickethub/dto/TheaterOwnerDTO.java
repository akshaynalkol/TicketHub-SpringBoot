package com.tickethub.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TheaterOwnerDTO extends BaseDTO {
	private String name;
	private String contactInfo;
	private List<TheaterDTO> theaters = new ArrayList<>();;
}
