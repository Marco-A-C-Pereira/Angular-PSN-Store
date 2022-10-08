import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLabelPricingComponent } from './card-label-pricing.component';

describe('CardLabelPricingComponent', () => {
  let component: CardLabelPricingComponent;
  let fixture: ComponentFixture<CardLabelPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLabelPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLabelPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
