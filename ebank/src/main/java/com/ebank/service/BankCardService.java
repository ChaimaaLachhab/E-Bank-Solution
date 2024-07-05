package com.ebank.service;

import com.ebank.enums.Status;
import com.ebank.enums.Type;
import com.ebank.model.Account;
import com.ebank.model.BankCard;
import com.ebank.model.User;
import com.ebank.repository.AccountRepository;
import com.ebank.repository.BankCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Random;

@Service
public class BankCardService {

    @Autowired
    private BankCardRepository bankCardRepository;

    @Autowired
    private AccountRepository accountRepository;

    public BankCard addDefaultBankCard(Account account) {
        BankCard bankCard = new BankCard();
        bankCard.setCardNumber(generateCardNumber());
        bankCard.setExpirationDate(generateExpirationDate(5));
        bankCard.setCardType(Type.DEBIT);
        bankCard.setStatus(Status.ACTIVATE);
        bankCard.setAccount(account);

        bankCardRepository.save(bankCard);

        return bankCard;
    }

    public BankCard addBankCard(Long accountId, BankCard bankCard) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));

        boolean cardExists = account.getBankCards().stream() .anyMatch(card -> card.getCardType() == bankCard.getCardType());

        if (cardExists) {
            throw new IllegalArgumentException("A card of the same type already exists for this account.");
        }

        bankCard.setCardNumber(generateCardNumber());
        bankCard.setExpirationDate(generateExpirationDate(5));
        bankCard.setStatus(Status.ACTIVATE);
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

    private String generateExpirationDate(int yearsToAdd) {
        LocalDate currentDate = LocalDate.now();
        LocalDate expirationDate = currentDate.plusYears(yearsToAdd);
        DateTimeFormatter format = DateTimeFormatter.ofPattern("MM/yy");
        return expirationDate.format(format);
    }

    public BankCard getBankCard(Long accountId) {
        return
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
    public BankCard blockBankCard(Long bankCardId, String blockRaison) {
        BankCard bankCard = bankCardRepository.findById(bankCardId).orElseThrow(() -> new IllegalArgumentException("Bank card not found"));
        if (blockRaison.trim().equals("")) {
            throw new IllegalArgumentException("Block raison cannot be empty.");
        }
        bankCard.setStatus(Status.BLOCK);
        bankCard.setBlockRaison(blockRaison);
        return bankCardRepository.save(bankCard);
    }
}
