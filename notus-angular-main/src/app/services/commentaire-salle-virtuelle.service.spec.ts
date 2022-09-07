import { TestBed } from '@angular/core/testing';
import { CommentaireSalleVirtuelleService } from './commentaire-salle-virtuelle.service';

describe('CommentaireSalleVirtuelleService', () => {
  let service: CommentaireSalleVirtuelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireSalleVirtuelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
