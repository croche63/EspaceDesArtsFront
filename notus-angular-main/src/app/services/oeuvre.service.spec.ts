import { TestBed } from '@angular/core/testing';

import { OeuvreService } from './oeuvre.service';

describe('OeuvreService', () => {
  let service: OeuvreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OeuvreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
