package com.example.SpringBoot_Interface;

import java.util.List;

import com.example.SpringBoot.model.Persona;

public interface IPersona_Service {
	//Traer una lista de persona
	public List<Persona> getPersona();
	
	//Guardar un objeto de tipo persona
	public void savePersona(Persona persona);
	
	//Eliminar un objeto, se busca por id
	public void deletePersona(Long id);
	
	//Buscar una persona por id
	public Persona findPersona(Long id);
	
}
