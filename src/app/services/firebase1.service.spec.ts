import { TestBed, inject } from '@angular/core/testing';

import { Firebase1Service } from './firebase1.service';

describe('Firebase1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Firebase1Service]
    });
  });

  it('should be created', inject([Firebase1Service], (service: Firebase1Service) => {
    expect(service).toBeTruthy();
  }));
});
