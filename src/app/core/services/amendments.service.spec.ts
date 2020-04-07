import { TestBed } from '@angular/core/testing';

import { AmendmentsService } from './amendments.service';

describe('AmendmentsService', () => {
  let service: AmendmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmendmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
