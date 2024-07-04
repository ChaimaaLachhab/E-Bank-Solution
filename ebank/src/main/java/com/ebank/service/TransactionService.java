package com.ebank.service;

import com.ebank.model.Account;
import com.ebank.model.Transaction;
import com.ebank.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private AccountRepository accountRepository;

    public List<Transaction> getAccountTransactions(Long accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));
        return account.getTransactions();
    }

}
