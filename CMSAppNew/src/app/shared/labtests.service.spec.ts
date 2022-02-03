import { TestBed } from '@angular/core/testing';

import { LabtestsService } from './labtests.service';

describe('LabtestsService', () => {
  let service: LabtestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabtestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
