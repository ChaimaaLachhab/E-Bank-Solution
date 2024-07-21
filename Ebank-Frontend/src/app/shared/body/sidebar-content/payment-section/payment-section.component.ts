import { Component } from '@angular/core';
import {CardButtonComponent} from "./card-button/card-button.component";
import {PaymentComponent} from "./payment/payment.component";
import {RouterLink} from "@angular/router";
import {OverlayService} from "../../../../core/service/overlay/overlay.service";

@Component({
  selector: 'app-payment-section',
  standalone: true,
    imports: [
        CardButtonComponent,
        PaymentComponent,
        RouterLink
    ],
  templateUrl: './payment-section.component.html',
  styleUrl: './payment-section.component.scss'
})
export class PaymentSectionComponent {
  constructor(private overlayService: OverlayService) {}
  openCreateAccount() {
    this.overlayService.show('account-form');
  }
}
