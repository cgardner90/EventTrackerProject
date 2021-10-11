package com.skilldistillery.tracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.tracker.entities.Transaction;
import com.skilldistillery.tracker.repositories.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {
	@Autowired
	private TransactionRepository tranRepo;
	
	
	@Override
	public List<Transaction> getAllTransactions() {
		return tranRepo.findAll();
				
	}
	@Override
	public Transaction findById(int id) {
		Optional<Transaction> test = tranRepo.findById(id);
			if(test.isPresent()) {
				return test.get();
			}
		
		return null;
	}
	@Override
	public Transaction create(Transaction transaction) {
		return tranRepo.save(transaction);
	}
	
	@Override
	public boolean delete(int id) {
		boolean deleted = false;
		Optional<Transaction> trans = tranRepo.findById(id);
		if(trans.isPresent()) {
			Transaction toRemove = trans.get();
			tranRepo.delete(toRemove);
			deleted = true;
		}
		
		return deleted;
		
		
	}
	
}
