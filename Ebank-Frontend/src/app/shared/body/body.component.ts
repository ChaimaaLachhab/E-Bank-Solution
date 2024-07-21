import { Component } from '@angular/core';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {SidebarContentComponent} from "./sidebar-content/sidebar-content.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    SidebarComponent,
    MainContentComponent,
    SidebarContentComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
