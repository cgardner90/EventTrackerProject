package com.skilldistillery.tracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.tracker.entities.Fossil;
import com.skilldistillery.tracker.services.FossilService;

@RestController
@RequestMapping("api")
public class FossilController {
	
	@Autowired
	private FossilService serv;
	
	@GetMapping("fossils")
	public List<Fossil> fossilIndex(){
		return serv.getAllTransactions();
	}
	
	@GetMapping("fossils/{id}")
	public Fossil findById(@PathVariable int id) {
		return serv.findById(id);
	}
	@PostMapping("fossils")
	public Fossil createTransaction(@RequestBody Fossil transaction, HttpServletResponse res) {
		transaction = serv.create(transaction);
		if(transaction ==null) {
			res.setStatus(404);
			return null;
		}
		return transaction; 
	
	}
	@DeleteMapping("fossils/{id}")
	public Boolean deleteTransaction(@PathVariable int id) {
		return serv.delete(id);
		
	}
	
	
	
	
	
}
