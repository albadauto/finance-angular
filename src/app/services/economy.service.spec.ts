import { TestBed } from '@angular/core/testing';

import { EconomyService } from './economy.service';

describe('EconomyService', () => {
  let service: EconomyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EconomyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
