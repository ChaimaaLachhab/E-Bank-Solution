import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AccountType} from "../../core/enum/account-type";
import {AccountService} from "../../core/service/account/account.service";
import {NgForOf} from "@angular/common";
import {Account} from "../../core/model/account/account";
import {OverlayService} from "../../core/service/overlay/overlay.service";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    RouterOutlet
  ],
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  accountForm: FormGroup;
  accountId: number | null = null;
  accountTypes = Object.values(AccountType);

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private overlayService: OverlayService,
  ) {
    this.accountForm = this.fb.group({
      accountType: ['', Validators.required],
      balance: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.accountId = idParam ? +idParam : null;
    if (this.accountId) {
      this.loadAccount(this.accountId);
    }

  }

  loadAccount(accountId: number): void {
    this.accountService.getAllAccounts().subscribe({
      next: (data) => {
        const account = data.find(acc => acc.id === accountId);
        if (account) {
          this.accountForm.patchValue({
            accountType: account.accountType,
            balance: account.balance
          });
        }
      },
      error: (err) => console.error('Failed to load account', err),
      complete: () => console.log('Account loading completed.')
    });
  }

  saveAccount(): void {
    const accountData = this.accountForm.value;
    if (this.accountId) {
      this.accountService.updateAccount(this.accountId, accountData).subscribe({
        next: () => {
          this.overlayService.hide();
          this.router.navigate(['/dashboard']);
         },
        error: (err) => console.error('Failed to update account', err),
        complete: () => console.log('Account update completed.'),
      });
    } else {
      this.accountService.addAccount(accountData).subscribe({
        next: () => {
          this.overlayService.hide();
          console.log('Account creation completed.');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => console.error('Failed to create account', err),
        complete: () => console.log('Account creation completed.')
      });
    }
  }

}
