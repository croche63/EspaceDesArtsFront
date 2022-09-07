import { TestBed } from '@angular/core/testing';

import { SignalementSalleVirtuelleService } from './signalement-salle-virtuelle.service';

describe('SignalementSalleVirtuelleService', () => {
  let service: SignalementSalleVirtuelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalementSalleVirtuelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
