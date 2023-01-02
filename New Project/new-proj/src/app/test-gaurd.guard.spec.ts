import { TestBed } from '@angular/core/testing';

import { TestGaurdGuard } from './test-gaurd.guard';

describe('TestGaurdGuard', () => {
  let guard: TestGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
