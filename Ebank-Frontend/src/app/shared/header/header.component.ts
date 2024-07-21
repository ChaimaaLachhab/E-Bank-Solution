import { Component } from '@angular/core';
import {LogoComponent} from "./logo/logo.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {LogoutComponent} from "./logout/logout.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    UserProfileComponent,
    LogoutComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen = false;
  activeTab: string = 'overview';

  toggleNavigation(): void {
    this.isOpen = !this.isOpen;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
