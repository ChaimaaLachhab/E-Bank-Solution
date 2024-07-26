import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../core/service/account/account.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayService } from '../../core/service/overlay/overlay.service';

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
  accountId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private overlayService: OverlayService
  ) {
    this.closeAccountForm = this.fb.group({
      reason: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.closeAccount();
  }

  closeAccount(): void {
    if (this.accountId !== null) {
      const reason = this.closeAccountForm.value.reason;
      this.accountService.closeAccount(this.accountId, reason).subscribe({
        next: () => {
          this.overlayService.hide();
        },
        error: (err) => console.error('Failed to close account', err),
        complete: () => console.log('Account closing completed.')
      });
    }
  }

  onCancel(): void {
    this.overlayService.hide();
  }
}
