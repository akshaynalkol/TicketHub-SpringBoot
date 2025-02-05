package com.tickethub.entities;

import java.time.LocalDate;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true, exclude = { "showtime", "user" })
public class Booking extends BaseEntity {
	@CreationTimestamp
	private LocalDate bookingDate;
	private int noOfSeat;
	@Column(length = 25)
	private String paymentStatus;

	// ONE booking belongs to ONE showtime
	@ManyToOne
	@JoinColumn(name = "showtime_id", nullable = false)
	private Showtime showtime;

	// ONE booking belongs to ONE user
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)   
	private User user;

	// ONE booking can have MANY booked seats
	@OneToMany(mappedBy = "booking", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<BookedSeat> bookedSeats;

}
