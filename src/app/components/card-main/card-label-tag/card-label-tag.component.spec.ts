import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLabelTagComponent } from './card-label-tag.component';

describe('CardLabelTagComponent', () => {
  let component: CardLabelTagComponent;
  let fixture: ComponentFixture<CardLabelTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLabelTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLabelTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
