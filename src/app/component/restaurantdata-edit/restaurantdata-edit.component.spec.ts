import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantdataEditComponent } from './restaurantdata-edit.component';

describe('RestaurantdataEditComponent', () => {
  let component: RestaurantdataEditComponent;
  let fixture: ComponentFixture<RestaurantdataEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantdataEditComponent]
    });
    fixture = TestBed.createComponent(RestaurantdataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
