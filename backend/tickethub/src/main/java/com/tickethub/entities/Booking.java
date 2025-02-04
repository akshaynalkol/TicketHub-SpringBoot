package com.tickethub.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	private LocalDate bookingDate;
	private int seatNo;
	@Column(length = 25)
	private String paymentStatus;

	@ManyToOne
	@JoinColumn(name = "showTimeId")
	private Showtime showtime;

	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;
}
