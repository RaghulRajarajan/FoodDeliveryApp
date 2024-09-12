import { TestBed } from '@angular/core/testing';

import { CustomerdataService } from './customerdata.service';

describe('CustomerdataService', () => {
  let service: CustomerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
