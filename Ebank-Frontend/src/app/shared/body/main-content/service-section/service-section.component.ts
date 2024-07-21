import { Component } from '@angular/core';
import {ServiceTileComponent} from "./service-tile/service-tile.component";

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [
    ServiceTileComponent
  ],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.scss'
})
export class ServiceSectionComponent {

}
