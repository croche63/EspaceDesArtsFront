import { TestBed } from '@angular/core/testing';

import { CommentaireOeuvreService } from './commentaire-oeuvre.service';

describe('CommentaireOeuvreService', () => {
  let service: CommentaireOeuvreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireOeuvreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
