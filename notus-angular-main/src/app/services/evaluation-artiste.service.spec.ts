import { TestBed } from '@angular/core/testing';

import { EvaluationArtisteService } from './evaluation-artiste.service';

describe('EvaluationArtisteService', () => {
  let service: EvaluationArtisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationArtisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
