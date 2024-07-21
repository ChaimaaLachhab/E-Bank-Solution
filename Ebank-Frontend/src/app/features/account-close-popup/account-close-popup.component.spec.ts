import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClosePopupComponent } from './account-close-popup.component';

describe('AccountClosePopupComponent', () => {
  let component: AccountClosePopupComponent;
  let fixture: ComponentFixture<AccountClosePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountClosePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountClosePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
