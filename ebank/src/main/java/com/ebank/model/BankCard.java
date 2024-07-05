package com.ebank.model;

import com.ebank.enums.Status;
import com.ebank.enums.Type;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

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
    private String expirationDate;
    @Enumerated(EnumType.STRING)
    private Type cardType;
    private Status status;
    private String blockRaison;

    @ManyToOne
    @JsonIgnore
    private Account account;
}
