package com.tickethub.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "theaters")
@Getter
@Setter
@ToString(callSuper = true)
class Theater extends BaseEntity {
	@Column(unique = true, length = 25)
	private String name;
	@Column(length = 25)
	private String location;
}
