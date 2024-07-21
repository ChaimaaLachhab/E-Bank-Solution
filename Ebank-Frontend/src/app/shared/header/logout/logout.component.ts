import { Component } from '@angular/core';
import {OverlayService} from "../../../core/service/overlay/overlay.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(private overlayService : OverlayService) {
  }

  openLogin() {
    this.overlayService.show('login');
  }
}
