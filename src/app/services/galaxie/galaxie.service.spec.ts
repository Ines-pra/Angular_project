import { TestBed } from '@angular/core/testing';

import { GalaxieService } from './galaxie.service';

describe('GalaxieService', () => {
  let service: GalaxieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalaxieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
