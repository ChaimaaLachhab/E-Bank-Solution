import { Component } from '@angular/core';
import {NavigationComponent} from "./navigation/navigation.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NavigationComponent,
    FooterComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
