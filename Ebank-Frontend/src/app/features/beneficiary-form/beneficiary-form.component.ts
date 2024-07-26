import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {Beneficiary} from "../../core/model/beneficiary/beneficiary";
import {BeneficiaryService} from "../../core/service/beneficiary/beneficiary.service";
import {NgForOf} from "@angular/common";
import {OverlayService} from "../../core/service/overlay/overlay.service";
import {BankName} from "../../core/enum/bank-name";

@Component({
  selector: 'app-beneficiary-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    NgForOf
  ],
  templateUrl: './beneficiary-form.component.html',
  styleUrl: './beneficiary-form.component.scss'
})
export class BeneficiaryFormComponent {
  beneficiaryForm: FormGroup;
  beneficiaryId: number | null = null;
  accountId = 1;
  bankNames = Object.values(BankName);

  constructor(
    private fb: FormBuilder,
    private beneficiaryService: BeneficiaryService,
    private route: ActivatedRoute,
    private router: Router,
    private overlayService: OverlayService
  ) {
    this.beneficiaryForm = this.fb.group({
      name: ['', Validators.required],
      rib: ['', Validators.required],
      bankName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.beneficiaryId) {
      this.loadBeneficiary(this.beneficiaryId);
    }

  }

  loadBeneficiary(beneficiaryId: number): void {
    this.beneficiaryService.getAllBeneficiaries(this.accountId).subscribe({
      next: (data) => {
        const beneficiary = data.find(b => b.id === beneficiaryId);
        if (beneficiary) {
          this.beneficiaryForm.patchValue(beneficiary);
        }
      },
      error: (err) => console.error('Failed to load beneficiary', err)
    });
  }

  saveBeneficiary(): void {
    const beneficiaryData = this.beneficiaryForm.value as Beneficiary;
    if (this.beneficiaryId) {
      this.beneficiaryService.updateBeneficiary(this.beneficiaryId, beneficiaryData).subscribe({
        next: () => {
          this.overlayService.hide();
          this.router.navigate(['/dashboard'])
        },
        error: (err) => console.error('Failed to update beneficiary', err)
      });
    } else {
      this.beneficiaryService.addBeneficiary(this.accountId, beneficiaryData).subscribe({
        next: () => {
          this.overlayService.hide();
          this.router.navigate(['/dashboard'])
        },
        error: (err) => console.error('Failed to add beneficiary', err)
      });
    }
  }
}
