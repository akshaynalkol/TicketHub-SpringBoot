package com.tickethub.dto;

import java.util.ArrayList;
import java.util.List;

import com.tickethub.entities.Cast;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MovieCastDTO extends BaseDTO {
	private String director;
	private String writer;
	private List<CastDTO> casts=new ArrayList<>();   
}
