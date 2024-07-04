package com.ebank.service;

import com.ebank.enums.Status;
import com.ebank.enums.Type;
import com.ebank.model.Account;
import com.ebank.model.BankCard;
import com.ebank.model.User;
import com.ebank.repository.BankCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Random;

@Service
public class BankCardService {

    @Autowired
    private BankCardRepository bankCardRepository;

    public BankCard addBankCard(User user, Account account) {
        BankCard bankCard = new BankCard();
        bankCard.setCardNumber(generateCardNumber());
        bankCard.setExpirationDate(generateExpirationDate());
        bankCard.setCardType(Type.DEBIT);
        bankCard.setStatus(Status.ACTIVATE);
        bankCard.setUser(user);
        bankCard.setAccount(account);

        bankCardRepository.save(bankCard);

        return bankCard;
    }

    private String generateCardNumber() {
        Random random = new Random();
        StringBuilder cardNumber = new StringBuilder();
        for (int i = 0; i < 16; i++) {
            cardNumber.append(random.nextInt(10));
        }
        return cardNumber.toString();
    }

    private Date generateExpirationDate() {
        return new Date(System.currentTimeMillis() + (5L * 365 * 24 * 60 * 60 * 1000));
    }
}
