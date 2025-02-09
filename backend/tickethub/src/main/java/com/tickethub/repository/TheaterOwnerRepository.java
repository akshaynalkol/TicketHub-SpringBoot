package com.tickethub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tickethub.entities.TheaterOwner;

public interface TheaterOwnerRepository extends JpaRepository<TheaterOwner, Long> {

}
