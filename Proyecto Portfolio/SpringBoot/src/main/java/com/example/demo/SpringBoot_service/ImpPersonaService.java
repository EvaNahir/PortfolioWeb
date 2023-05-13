package com.example.demo.SpringBoot_service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringBoot.model.Persona;
import com.example.SpringBoot_Interface.IPersona_Service;
import com.example.demoSpringBoot_repository.IPersona_repository;

@Service
public class ImpPersonaService implements IPersona_Service{
	@Autowired IPersona_repository ipersonaRepository;
	
	@Override
	public List<Persona> getPersona(){
		List<Persona> persona = ipersonaRepository.findAll();
		return persona;
	}
	
	@Override
	public void savePersona(Persona persona){
		ipersonaRepository.save(persona);
	}
	
	@Override
	public void deletePersona(Long id){
		ipersonaRepository.deleteById(id);
	}
	
	@Override
	public Persona findPersona(Long id){
		Persona persona = ipersonaRepository.findById(id).orElse(null);
		return persona;
	}

}
