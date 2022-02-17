import { TestBed } from '@angular/core/testing';

import { PharmacybillService } from './pharmacybill.service';

describe('PharmacybillService', () => {
  let service: PharmacybillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacybillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
