import { Component } from '@angular/core';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, NgClass} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AccountListComponent} from "../../../../../features/account-list/account-list.component";
import {BeneficiaryListComponent} from "../../../../../features/beneficiary-list/beneficiary-list.component";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    RouterOutlet,
    AccountListComponent,
    BeneficiaryListComponent

  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

}
