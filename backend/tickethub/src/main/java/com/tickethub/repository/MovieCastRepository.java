package com.tickethub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.MovieCast;

public interface MovieCastRepository extends JpaRepository<MovieCast, Long> {

}
