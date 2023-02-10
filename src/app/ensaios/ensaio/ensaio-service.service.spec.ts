import { TestBed } from '@angular/core/testing';

import { EnsaioServiceService } from './ensaio-service.service';

describe('EnsaioServiceService', () => {
  let service: EnsaioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnsaioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
