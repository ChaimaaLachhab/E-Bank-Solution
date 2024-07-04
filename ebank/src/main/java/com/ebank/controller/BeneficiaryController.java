package com.ebank.controller;

import com.ebank.model.Beneficiary;
import com.ebank.service.BeneficiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/beneficiary")
public class BeneficiaryController {

    @Autowired
    private BeneficiaryService beneficiaryService;

    @GetMapping
    public List<Beneficiary> getAllBeneficiaries() {
        return beneficiaryService.getAllBeneficiaries();
    }

    @PostMapping
    public Beneficiary createAccount(@PathVariable Long accountId, @RequestBody Beneficiary beneficiary) {
        return beneficiaryService.saveBeneficiary(accountId, beneficiary);
    }

    @PutMapping
    public Beneficiary updateAccount(@PathVariable Long benefeciaryId, @RequestBody Beneficiary beneficiary) {
        return beneficiaryService.saveBeneficiary(benefeciaryId, beneficiary);
    }

    @DeleteMapping
    public void deleteAccount(@PathVariable Long benefeciaryId) {
        beneficiaryService.deleteBeneficiary(benefeciaryId);
    }
}
