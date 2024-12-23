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
@ToString(callSuper = true, exclude = { "movieCast" })
public class Movie extends BaseEntity {
	@Column(unique = true)
	private String title;
	@Lob
	private String overview;
	private double vote_average;
	private int vote_count;
	private String release_date;
	private String backdrop_path;
	private String poster_path;
	private String movieStatus;
	
	private long movieId;

//	@OneToMany(mappedBy = "movie")
//	private List<MovieCast> movieCasts = new ArrayList<>();

	@OneToOne(cascade = CascadeType.ALL)
	private MovieCast movieCasts;

}
