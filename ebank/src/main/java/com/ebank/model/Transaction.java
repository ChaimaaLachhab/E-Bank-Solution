package com.ebank.model;


import com.ebank.enums.TransactionType;
import com.ebank.enums.Type;
import lombok.*;
import jakarta.persistence.*;

import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private Double amount;
    @Enumerated(EnumType.STRING)
    private Type transactionType;
    @Enumerated(EnumType.STRING)
    private TransactionType transactionFor;
    private String description;

    @ManyToOne
    private Account account;

    @ManyToOne
    private Beneficiary beneficiary;
}
