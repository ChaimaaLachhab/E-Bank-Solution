import { Component } from '@angular/core';
import {OverlayService} from "../../../core/service/overlay/overlay.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(private overlayService : OverlayService, private  router:Router) {
  }

  openLogin() {
    this.overlayService.show('login');
  }
  openSignUp() {
    this.overlayService.show('register');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
