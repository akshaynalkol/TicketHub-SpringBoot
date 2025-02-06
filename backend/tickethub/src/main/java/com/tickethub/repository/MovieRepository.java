package com.tickethub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tickethub.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

	List<Movie> findByType(String type);

	List<Movie> findByTitleContainingIgnoreCase(String title);

	@Query("SELECT m FROM Movie m WHERE " + "(:status IS NULL OR m.status = :status) AND "
			+ "(:category IS NULL OR m.category = :category) AND " + "(:rating IS NULL OR m.vote_average >= :rating) "
			+ "AND m.type = :type") // Assuming type is required
	List<Movie> filterMovies(@Param("status") String status, @Param("category") String category,
			@Param("rating") Double rating, @Param("type") String type);

}