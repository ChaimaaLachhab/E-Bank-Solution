import { Routes } from '@angular/router';
import {RegistrationComponent} from "./features/registration/registration.component";
import {AccountListComponent} from "./features/account-list/account-list.component";
import {AccountFormComponent} from "./features/account-form/account-form.component";
import {LoginComponent} from "./features/login/login.component";
import {DashboardComponent} from "./shared/dashboard/dashboard.component";
import {SignComponent} from "./features/sign/sign.component";
import {OverlayComponent} from "./shared/overlay/overlay.component";
import {AccountClosePopupComponent} from "./features/account-close-popup/account-close-popup.component";
import {BeneficiaryFormComponent} from "./features/beneficiary-form/beneficiary-form.component";

export const routes: Routes = [
  { path: 'overlay/login', component: LoginComponent },
  { path: 'overlay/register', component: RegistrationComponent },
  { path: 'overlay/sign', component: SignComponent },
  //{ path: 'dashboard', component: TestCom, canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'accounts', component: AccountListComponent},
  { path: 'overlay/account-form', component: AccountFormComponent},
  { path: 'overlay/account-form/:id', component: AccountFormComponent },
  { path: 'overlay/account-close/:id', component: AccountClosePopupComponent },
  { path: 'overlay/beneficiary-form', component: BeneficiaryFormComponent},
  { path: 'overlay/beneficiary-form/:id', component: BeneficiaryFormComponent },
];
