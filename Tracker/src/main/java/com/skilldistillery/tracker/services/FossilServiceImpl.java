package com.skilldistillery.tracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.tracker.entities.Fossil;
import com.skilldistillery.tracker.repositories.FossilRepository;

@Service
public class FossilServiceImpl implements FossilService {
	@Autowired
	private FossilRepository tranRepo;
	
	
	@Override
	public List<Fossil> getAllTransactions() {
		return tranRepo.findAll();
				
	}
	@Override
	public Fossil findById(int id) {
		Optional<Fossil> test = tranRepo.findById(id);
			if(test.isPresent()) {
				return test.get();
			}
		
		return null;
	}
	@Override
	public Fossil create(Fossil transaction) {
		return tranRepo.save(transaction);
	}
	
	@Override
	public boolean delete(int id) {
		boolean deleted = false;
		Optional<Fossil> trans = tranRepo.findById(id);
		if(trans.isPresent()) {
			Fossil toRemove = trans.get();
			tranRepo.delete(toRemove);
			deleted = true;
		}
		
		return deleted;
		
		
	}
	
}
