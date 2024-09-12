import { TestBed } from '@angular/core/testing';

import { RestaurantLoginService } from './restaurant-login.service';

describe('RestaurantLoginService', () => {
  let service: RestaurantLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
