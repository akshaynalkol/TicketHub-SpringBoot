package com.tickethub.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Showtimes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true, exclude = { "movie", "theater" })
public class Showtime extends BaseEntity {
	private LocalDate date;
	private LocalTime time;
	private int availableSeats;   
	private double amount;
	@ManyToOne
	@JoinColumn(name = "movieId")
	private Movie movie;
	@ManyToOne
	@JoinColumn(name = "theaterId")
	private Theater theater;
}
