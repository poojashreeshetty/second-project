import { TestBed } from '@angular/core/testing';

import { CongratsGaurdGuard } from './congrats-gaurd.guard';

describe('CongratsGaurdGuard', () => {
  let guard: CongratsGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CongratsGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
