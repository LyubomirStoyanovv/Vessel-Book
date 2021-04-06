import { TestBed } from '@angular/core/testing';

import { ShipDetailGuard } from './ship-detail.guard';

describe('ShipDetailGuard', () => {
  let guard: ShipDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShipDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
