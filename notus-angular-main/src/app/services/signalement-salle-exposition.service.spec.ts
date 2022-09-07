import { TestBed } from '@angular/core/testing';

import { SignalementSalleExpositionService } from './signalement-salle-exposition.service';

describe('SignalementSalleExpositionService', () => {
  let service: SignalementSalleExpositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalementSalleExpositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
