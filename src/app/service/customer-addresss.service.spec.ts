import { TestBed } from '@angular/core/testing';

import { CustomerAddresssService } from './customer-addresss.service';

describe('CustomerAddresssService', () => {
  let service: CustomerAddresssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAddresssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
