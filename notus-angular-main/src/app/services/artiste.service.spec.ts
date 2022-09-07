import { TestBed } from '@angular/core/testing';

import { ArtisteService } from './artiste.service';

describe('ArtisteService', () => {
  let service: ArtisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
