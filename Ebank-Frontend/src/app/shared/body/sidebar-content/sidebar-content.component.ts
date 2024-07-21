import { Component } from '@angular/core';
import {FaqComponent} from "./faq/faq.component";
import {PaymentSectionComponent} from "./payment-section/payment-section.component";

@Component({
  selector: 'app-sidebar-content',
  standalone: true,
  imports: [
    FaqComponent,
    PaymentSectionComponent
  ],
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.scss'
})
export class SidebarContentComponent {

}
