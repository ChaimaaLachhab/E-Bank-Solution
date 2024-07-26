import { Component } from '@angular/core';
import {AccountListComponent} from "../../../../../features/account-list/account-list.component";
import {BeneficiaryListComponent} from "../../../../../features/beneficiary-list/beneficiary-list.component";

@Component({
  selector: 'app-beneficiary',
  standalone: true,
    imports: [
        AccountListComponent,
        BeneficiaryListComponent
    ],
  templateUrl: './beneficiary.component.html',
  styleUrl: './beneficiary.component.scss'
})
export class BeneficiaryComponent {

}
