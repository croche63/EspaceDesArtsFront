import { TestBed } from '@angular/core/testing';

import { SignalementOeuvreService } from './signalement-oeuvre.service';

describe('SignalementOeuvreService', () => {
  let service: SignalementOeuvreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalementOeuvreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
