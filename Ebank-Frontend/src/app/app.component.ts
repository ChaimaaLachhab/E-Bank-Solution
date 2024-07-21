import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegistrationComponent} from "./features/registration/registration.component";
import {LoginComponent} from "./features/login/login.component";
import {AccountListComponent} from "./features/account-list/account-list.component";
import {AccountFormComponent} from "./features/account-form/account-form.component";
import {NgOptimizedImage} from "@angular/common";
import {PasswordResetComponent} from "./features/password-reset/password-reset.component";
import {HeaderComponent} from "./shared/header/header.component";
import {BodyComponent} from "./shared/body/body.component";
import {DashboardComponent} from "./shared/dashboard/dashboard.component";
import {OverlayComponent} from "./shared/overlay/overlay.component";
import {OverlayService} from "./core/service/overlay/overlay.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrationComponent, LoginComponent, AccountListComponent, AccountFormComponent, LoginComponent, NgOptimizedImage, PasswordResetComponent, HeaderComponent, BodyComponent, DashboardComponent, OverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ebank-Frontend';
  constructor(private overlayService: OverlayService) {}
  openCreateAccount() {
    this.overlayService.show('login');
  }
}
