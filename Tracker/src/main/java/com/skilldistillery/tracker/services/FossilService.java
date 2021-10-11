package com.skilldistillery.tracker.services;

import java.util.List;

import com.skilldistillery.tracker.entities.Fossil;


public interface FossilService {
List<Fossil> getAllTransactions();

Fossil findById(int id);

Fossil create(Fossil transaction);

boolean delete(int id);
}
