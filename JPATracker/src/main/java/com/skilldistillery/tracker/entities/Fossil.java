package com.skilldistillery.tracker.entities;
import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Fossil {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private String description;
	private String species;
	private double age;
	private String country;
	@Column(name="discovered_by")
	private String discoveredBy;
	@Column(name="discovered_in")
	private String discoveredIn;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSpecies() {
		return species;
	}
	public void setSpecies(String species) {
		this.species = species;
	}
	public double getAge() {
		return age;
	}
	public void setAge(double age) {
		this.age = age;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getDiscoveredBy() {
		return discoveredBy;
	}
	public void setDiscoveredBy(String discoveredBy) {
		this.discoveredBy = discoveredBy;
	}
	public String getDiscoveredIn() {
		return discoveredIn;
	}
	public void setDiscoveredIn(String discoveredIn) {
		this.discoveredIn = discoveredIn;
	}
	@Override
	public String toString() {
		return "Fossil [id=" + id + ", name=" + name + ", description=" + description + ", species=" + species
				+ ", age=" + age + ", country=" + country + ", discoveredBy=" + discoveredBy + ", discoveredIn="
				+ discoveredIn + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Fossil other = (Fossil) obj;
		return id == other.id;
	}
	
	
	
	
	

}
