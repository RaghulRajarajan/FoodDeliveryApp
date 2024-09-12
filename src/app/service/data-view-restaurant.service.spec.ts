import { TestBed } from '@angular/core/testing';

import { DataViewRestaurantService } from './data-view-restaurant.service';

describe('DataViewRestaurantService', () => {
  let service: DataViewRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataViewRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
