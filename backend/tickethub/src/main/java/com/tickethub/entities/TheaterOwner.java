package com.tickethub.entities;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter  
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true)
public class TheaterOwner extends BaseEntity {
	@Column(name = "name", nullable = false)
    private String name;

    @Column(name = "contact_info", nullable = false, unique = true)
    private String contactInfo;

    @OneToMany(mappedBy = "theaterOwner", cascade = CascadeType.ALL)
    private List<Theater> theaters;
}
