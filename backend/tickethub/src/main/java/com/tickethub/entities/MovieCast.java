package com.tickethub.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "movie_casts")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString(callSuper = true, exclude = { "casts" })
public class MovieCast extends BaseEntity {
//	@Column(length = 25)
	private String director;
//	@Column(length = 25)
	private String writer;

//	@OneToMany(mappedBy = "movieCast",cascade = CascadeType.ALL)
//	@JoinColumn(name = "movie_cast_id")
//	private List<Cast> casts; 
	@OneToMany(mappedBy = "movieCast", cascade = CascadeType.ALL)
	private List<Cast> casts=new ArrayList<>();
}   
