import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {BodyComponent} from "../body/body.component";
import {HeaderComponent} from "../header/header.component";
import {OverlayComponent} from "../overlay/overlay.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    BodyComponent,
    HeaderComponent,
    OverlayComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
