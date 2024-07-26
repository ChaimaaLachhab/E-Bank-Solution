// src/app/features/account-list/account-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from "../../core/service/account/account.service";
import { Account } from "../../core/model/account/account";
import { AccountType} from "../../core/enum/account-type";
import {OverlayService} from "../../core/service/overlay/overlay.service";

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  accountType = AccountType;

  constructor(private overlayService: OverlayService, private accountService: AccountService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAccounts();
    this.overlayService.dataChanged$.subscribe(() => {
      this.loadAccounts();
    });
  }

  loadAccounts(): void {
    this.accountService.getAllAccounts().subscribe({
      next: (data) => this.accounts = data,
      error: (err) => console.error('Failed to load accounts', err),
      complete: () => console.log('Account loading completed.')
    });
  }

  getAccountTypeClass(accountType: AccountType): string {
    switch (accountType) {
      case AccountType.CURRENT:
        return 'account-type olive';
      case AccountType.SAVINGS:
        return 'account-type green';
      default:
        return '';
    }
  }

  openUpdateAccount(accountId: number) {
    this.overlayService.show('account-form', accountId);
  }

  openCloseAccount(accountId: number) {
    this.overlayService.show('account-close', accountId);
  }

}
