package com.ebank.controller;

import com.ebank.model.Account;
import com.ebank.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/all/{userId}")
    public List<Account> getAllAccounts(@PathVariable Long userId) {
        return accountService.getAllAccounts(userId);
    }

    @PostMapping("/add/{userId}")
    public Account addAccount(@PathVariable Long userId, @RequestBody Account account) {
        return accountService.createAccount(userId, account);
    }

    @PutMapping("/update/{userId}")
    public Account updateAccount(@PathVariable Long accountId, @RequestBody Account account) {
        return accountService.updateAccount(accountId, account);
    }

    @DeleteMapping("/delete/{userId}")
    public void deleteAccount(@PathVariable Long accountId) {
        accountService.deleteAccount(accountId);
    }

    @PutMapping("/close/{userId}")
    public void closeAccount(@PathVariable Long accountId, @PathVariable String raisonClosing) {
        accountService.closeAccount(accountId, raisonClosing);
    }

    @GetMapping("/balance/{userId}")
    public double  getBalance(@PathVariable Long accountId){
        return accountService.getAccountBalance(accountId);
    }

}
