import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'; // Import for using MatDialogRef
import { AccountService } from '../../core/service/account/account.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-close-popup',
  templateUrl: './account-close-popup.component.html',
  styleUrls: ['./account-close-popup.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AccountClosePopupComponent implements OnInit {
  closeAccountForm: FormGroup;
  accountId: number;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private dialogRef: MatDialogRef<AccountClosePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.accountId = data.accountId;
    this.closeAccountForm = this.fb.group({
      reason: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  closeAccount(): void {
    const reason = this.closeAccountForm.value.reason;
    this.accountService.closeAccount(this.accountId, reason).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (err) => console.error('Failed to close account', err),
      complete: () => console.log('Account closing completed.')
    });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
