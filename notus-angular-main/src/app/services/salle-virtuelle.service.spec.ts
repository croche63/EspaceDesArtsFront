import { TestBed } from '@angular/core/testing';

import { SalleVirtuelleService } from './salle-virtuelle.service';

describe('SalleVirtuelleService', () => {
  let service: SalleVirtuelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleVirtuelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
