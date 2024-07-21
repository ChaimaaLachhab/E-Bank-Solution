import { Component } from '@angular/core';
import {TransferComponent} from "./transfer/transfer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-transfer-section',
  standalone: true,
  imports: [
    TransferComponent,
    RouterLink
  ],
  templateUrl: './transfer-section.component.html',
  styleUrl: './transfer-section.component.scss'
})
export class TransferSectionComponent {

}
