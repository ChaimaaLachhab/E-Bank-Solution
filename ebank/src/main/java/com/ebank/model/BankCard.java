package com.ebank.model;

import com.ebank.enums.Status;
import com.ebank.enums.Type;
import lombok.*;
import jakarta.persistence.*;

import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class BankCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cardNumber;
    private Date expirationDate;
    @Enumerated(EnumType.STRING)
    private Type cardType;
    private Status status;
    private String blockRaison;

    @ManyToOne
    private Account account;

    @ManyToOne
    private User user;
}
