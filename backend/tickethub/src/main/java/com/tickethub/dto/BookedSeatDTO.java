package com.tickethub.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookedSeatDTO extends BaseDTO {
	private String seatNo;
//	private ShowtimeDTO showtime;
}
