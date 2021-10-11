package com.skilldistillery.tracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.tracker.entities.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

}
