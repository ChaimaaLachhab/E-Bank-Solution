package com.ebank.controller;

import com.ebank.model.BankCard;
import com.ebank.service.BankCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/bankCard")
public class BankCardController {
    @Autowired
    private BankCardService bankCardService;

    @PostMapping("/add/{accountId}")
    public BankCard createBankCard(@PathVariable Long accountId, @RequestBody BankCard bankCard) {
        return bankCardService.addBankCard(accountId, bankCard);
    }
}
