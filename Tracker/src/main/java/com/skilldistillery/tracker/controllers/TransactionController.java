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

import com.skilldistillery.tracker.entities.Transaction;
import com.skilldistillery.tracker.services.TransactionService;

@RestController
@RequestMapping("api")
public class TransactionController {
	
	@Autowired
	private TransactionService serv;
	
	@GetMapping("transactions")
	public List<Transaction> transactionIndex(){
		return serv.getAllTransactions();
	}
	
	@GetMapping("transactions/{id}")
	public Transaction findById(@PathVariable int id) {
		return serv.findById(id);
	}
	@PostMapping("transactions")
	public Transaction createTransaction(@RequestBody Transaction transaction, HttpServletResponse res) {
		transaction = serv.create(transaction);
		if(transaction ==null) {
			res.setStatus(404);
			return null;
		}
		return transaction; 
	
	}
	@DeleteMapping("transactions/{id}")
	public Boolean deleteTransaction(@PathVariable int id) {
		return serv.delete(id);
		
	}
	
	
	
	
	
}
