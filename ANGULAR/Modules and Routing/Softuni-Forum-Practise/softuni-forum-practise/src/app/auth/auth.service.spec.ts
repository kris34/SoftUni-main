import { TestBed } from '@angular/core/testing';

import { AithService } from './auth.service';

describe('AithService', () => {
  let service: AithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
