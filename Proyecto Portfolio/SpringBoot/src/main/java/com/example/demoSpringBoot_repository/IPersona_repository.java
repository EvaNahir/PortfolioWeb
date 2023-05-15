package com.example.demoSpringBoot_repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SpringBoot.model.Persona;

@Repository
public interface IPersona_repository extends JpaRepository<Persona, Long> {
	
}
