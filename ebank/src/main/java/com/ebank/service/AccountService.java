package com.ebank.service;

import com.ebank.enums.AccountType;
import com.ebank.enums.Type;
import com.ebank.model.Account;
import com.ebank.model.BankCard;
import com.ebank.model.Transaction;
import com.ebank.model.User;
import com.ebank.repository.AccountRepository;
import com.ebank.repository.BankCardRepository;
import com.ebank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Random;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private BankCardService bankCardService;

    @Autowired
    private UserRepository userRepository;

    public List<Account> getAllAccounts(Long userId) {
        return accountRepository.findAllAccountsByUserId(userId);
    }

    public Account createAccount(Long userId, Account account) {

        User user = userRepository.findById(userId) .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (user.getAccounts().stream().anyMatch(acc -> acc.getAccountType() == account.getAccountType())) {
            throw new IllegalArgumentException("An account of this type already exists for this user.");
        }

        account.setUser(user);
        account.setAccountNumber(generateAccountNumber());
        account.setDateCreation(new Date(System.currentTimeMillis()));

        accountRepository.save(account);

        BankCard bankCard = bankCardService.addDefaultBankCard(account);

        account.getBankCards().add(bankCard);

        accountRepository.save(account);

        return account;
    }

    private String generateAccountNumber() {
        Random random = new Random();
        StringBuilder accountNumber = new StringBuilder();
        for (int i = 0; i < 12; i++) {
            accountNumber.append(random.nextInt(10));
        }
        return accountNumber.toString();
    }

    public double getAccountBalance(Long accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));
        return account.getBalance();
    }

    public void closeAccount(Long accountId, String raisonClosing) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));

        if (account.getBalance() != 0) {
            throw new IllegalStateException("Account balance must be zero before closing.");
        }

        account.setAccountClosed(true);
        account.setRaisonClosing(raisonClosing);

        accountRepository.save(account);
    }

    public Account updateAccount(Long accountId, Account account) {
        account.setId(accountId);
        return accountRepository.save(account);
    }

    public  void deleteAccount(Long accountId) {
        accountRepository.deleteById(accountId);
    }

    public Account getAccountById(Long accountId) {
        return accountRepository.findById(accountId).orElseThrow(() -> new IllegalArgumentException("Account not found"));
    }
}
