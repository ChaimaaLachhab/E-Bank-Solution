import { Component } from '@angular/core';
import {TransferSectionComponent} from "./transfer-section/transfer-section.component";
import {ServiceSectionComponent} from "./service-section/service-section.component";
import {SidebarContentComponent} from "../sidebar-content/sidebar-content.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    TransferSectionComponent,
    ServiceSectionComponent,
    SidebarContentComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
