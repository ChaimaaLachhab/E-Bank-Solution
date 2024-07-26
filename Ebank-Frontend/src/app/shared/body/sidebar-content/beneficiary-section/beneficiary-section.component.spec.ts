import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarySectionComponent } from './beneficiary-section.component';

describe('BeneficiarySectionComponent', () => {
  let component: BeneficiarySectionComponent;
  let fixture: ComponentFixture<BeneficiarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiarySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficiarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
