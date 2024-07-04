package com.ebank.model;

import com.ebank.enums.AccountType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import jakarta.persistence.*;

import java.sql.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String accountNumber;
    @Enumerated(EnumType.STRING)
    private AccountType accountType;
    private double balance;
    private Date dateCreation;
    private Boolean accountClosed = false;
    private String raisonClosing;

    @ManyToOne
    @JsonIgnore
    private User user;

    @OneToMany
    private List<Transaction> transactions;

    @OneToMany(mappedBy = "account", fetch = FetchType.LAZY)
    private List<BankCard> bankCards;

    @OneToMany
    private List<Beneficiary> beneficiaries;

    public void addBankCard(BankCard bankCard) {
        bankCards.add(bankCard);
        bankCard.setAccount(this);
    }
}
