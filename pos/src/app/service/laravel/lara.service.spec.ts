import { TestBed, inject } from '@angular/core/testing';

import { LaraService } from './lara.service';

describe('LaraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaraService]
    });
  });

  it('should be created', inject([LaraService], (service: LaraService) => {
    expect(service).toBeTruthy();
  }));
});
