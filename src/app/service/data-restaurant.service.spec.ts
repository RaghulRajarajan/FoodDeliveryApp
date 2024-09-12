import { TestBed } from '@angular/core/testing';

import { DataRestaurantService } from './data-restaurant.service';

describe('DataRestaurantService', () => {
  let service: DataRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
