import { Routes } from '@angular/router';
import {RegistrationComponent} from "./features/registration/registration.component";
import {AccountListComponent} from "./features/account-list/account-list.component";
import {AccountFormComponent} from "./features/account-form/account-form.component";
import {LoginComponent} from "./features/login/login.component";
import {DashboardComponent} from "./shared/dashboard/dashboard.component";
import {SignComponent} from "./features/sign/sign.component";
import {OverlayComponent} from "./shared/overlay/overlay.component";

export const routes: Routes = [
  { path: 'overlay/login', component: LoginComponent },
  { path: 'overlay/register', component: RegistrationComponent },
  { path: 'sign', component: SignComponent },
  //{ path: 'dashboard', component: TestCom, canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'accounts', component: AccountListComponent},
  { path: 'overlay/account-form', component: AccountFormComponent},
  { path: 'overlay/account-form/:id', component: AccountFormComponent },
];
