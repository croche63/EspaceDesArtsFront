import { TestBed } from '@angular/core/testing';

import { CommentaireSalleSalleVirtuelleService } from './commentaire-salle-salle-virtuelle.service';

describe('CommentaireSalleSalleVirtuelleService', () => {
  let service: CommentaireSalleSalleVirtuelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireSalleSalleVirtuelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
