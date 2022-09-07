import { TestBed } from '@angular/core/testing';

import { SalleExpositionService } from './salle-exposition.service';

describe('SalleExpositionService', () => {
  let service: SalleExpositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleExpositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
