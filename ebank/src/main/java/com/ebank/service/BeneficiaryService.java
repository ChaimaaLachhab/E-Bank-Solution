package com.ebank.service;

import com.ebank.model.Beneficiary;
import com.ebank.model.User;
import com.ebank.repository.BankCardRepository;
import com.ebank.repository.BeneficiaryRepository;
import com.ebank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeneficiaryService {
    @Autowired
    private BeneficiaryRepository beneficiaryRepository;

    public List<Beneficiary> getAllBeneficiaries() {
        return beneficiaryRepository.findAll();
    }

    public Beneficiary getUserById(Long id) {
        return beneficiaryRepository.findById(id).orElse(null);
    }

    public Beneficiary saveBeneficiary(Long benefeciaryId, Beneficiary beneficiary) {
        beneficiary.setId(benefeciaryId);
        return beneficiaryRepository.save(beneficiary);
    }

    public void deleteBeneficiary(Long id) {
        beneficiaryRepository.deleteById(id);
    }

}
