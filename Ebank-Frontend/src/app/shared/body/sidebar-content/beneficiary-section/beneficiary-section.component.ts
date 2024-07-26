import { Component } from '@angular/core';
import {PaymentComponent} from "../payment-section/payment/payment.component";
import {BeneficiaryComponent} from "./beneficiary/beneficiary.component";
import {OverlayService} from "../../../../core/service/overlay/overlay.service";

@Component({
  selector: 'app-beneficiary-section',
  standalone: true,
  imports: [
    PaymentComponent,
    BeneficiaryComponent
  ],
  templateUrl: './beneficiary-section.component.html',
  styleUrl: './beneficiary-section.component.scss'
})
export class BeneficiarySectionComponent {
  constructor(private overlayService: OverlayService) {}
  openCreateBeneficiary() {
      this.overlayService.show('beneficiary-form');
  }
}
