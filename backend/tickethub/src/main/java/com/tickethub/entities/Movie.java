package com.tickethub.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "movies")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString(callSuper = true, exclude = { "movieCasts" })
public class Movie extends BaseEntity {
	private long movieId;
	@Column(unique = true)
	private String title;
	@Lob
	private String overview;
	private double vote_average;
	private int vote_count;
	private String release_date;
	private String backdrop_path;
	private String poster_path;
	private String status;
	private String category; 
	private String tagline;
	private int revenue;
	private int runtime;
	
	private String type;

	@OneToOne(cascade = CascadeType.ALL)
	private MovieCast movieCasts;
}
