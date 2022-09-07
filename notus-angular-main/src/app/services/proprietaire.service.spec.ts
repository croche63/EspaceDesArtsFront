import { TestBed } from '@angular/core/testing';

import { ProprietaireService } from './proprietaire.service';

describe('ProprietaireService', () => {
  let service: ProprietaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProprietaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
