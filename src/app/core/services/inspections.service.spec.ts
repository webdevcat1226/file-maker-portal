import { TestBed } from '@angular/core/testing';

import { InspectionsService } from './inspections.service';

describe('InspectionsService', () => {
  let service: InspectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
