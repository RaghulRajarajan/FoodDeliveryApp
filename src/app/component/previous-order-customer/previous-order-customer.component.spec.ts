import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousOrderCustomerComponent } from './previous-order-customer.component';

describe('PreviousOrderCustomerComponent', () => {
  let component: PreviousOrderCustomerComponent;
  let fixture: ComponentFixture<PreviousOrderCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousOrderCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousOrderCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
