import { TestBed } from '@angular/core/testing';

import { CommentaireSalleExpositionService } from './commentaire-salle-exposition.service';

describe('CommentaireSalleExpositionService', () => {
  let service: CommentaireSalleExpositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireSalleExpositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
