import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSectionComponent } from './transfer-section.component';

describe('TransferSectionComponent', () => {
  let component: TransferSectionComponent;
  let fixture: ComponentFixture<TransferSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
