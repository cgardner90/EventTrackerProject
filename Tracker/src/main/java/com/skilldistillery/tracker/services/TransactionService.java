package com.skilldistillery.tracker.services;

import java.util.List;

import com.skilldistillery.tracker.entities.Transaction;


public interface TransactionService {
List<Transaction> getAllTransactions();

Transaction findById(int id);

Transaction create(Transaction transaction);

boolean delete(int id);
}
