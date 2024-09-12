import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSignupComponent } from './restaurant-signup.component';

describe('RestaurantSignupComponent', () => {
  let component: RestaurantSignupComponent;
  let fixture: ComponentFixture<RestaurantSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantSignupComponent]
    });
    fixture = TestBed.createComponent(RestaurantSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
