package com.tickethub.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShowtimeDTO extends BaseDTO {
	private LocalDate date;
	private LocalTime time;
	private int availableSeats;     
	private double amount;
	private MovieDTO movie;
	private TheaterDTO theater;
}
