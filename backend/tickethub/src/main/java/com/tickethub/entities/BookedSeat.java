package com.tickethub.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookedSeat extends BaseEntity {

	private String seatNo;

	// Many booked seats belong to ONE booking            
	@ManyToOne
	@JoinColumn(name = "booking_id", nullable = false)
	private Booking booking;

	// Many booked seats belong to ONE showtime
	@ManyToOne
	@JoinColumn(name = "showtime_id", nullable = false)
	private Showtime showtime;

}
