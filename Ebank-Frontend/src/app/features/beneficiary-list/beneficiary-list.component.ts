import { Component } from '@angular/core';
import {BeneficiaryService} from "../../core/service/beneficiary/beneficiary.service";
import {Beneficiary} from "../../core/model/beneficiary/beneficiary";
import {OverlayService} from "../../core/service/overlay/overlay.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-beneficiary-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './beneficiary-list.component.html',
  styleUrl: './beneficiary-list.component.scss'
})
export class BeneficiaryListComponent {
  beneficiaries: Beneficiary[] = [];
  accountId = 1;

  constructor(private overlayService:OverlayService, private beneficiaryService: BeneficiaryService) {}

  ngOnInit(): void {
    this.loadBeneficiaries();
    this.overlayService.dataChanged$.subscribe(() => {
      this.loadBeneficiaries();
    });
  }

  loadBeneficiaries(): void {
    this.beneficiaryService.getAllBeneficiaries(this.accountId).subscribe({
      next: (data) => this.beneficiaries = data,
      error: (err) => console.error('Failed to load beneficiaries', err)
    });
  }

  deleteBeneficiary(beneficiaryId: number): void {
    this.beneficiaryService.deleteBeneficiary(beneficiaryId).subscribe(() => {
      this.loadBeneficiaries();
    });
  }

  openUpdateBeneficiary(accountId: number) {
    this.overlayService.show('beneficiary-form', accountId);
  }
}
