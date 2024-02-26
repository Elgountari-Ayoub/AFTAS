import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { managerGuardGuard } from './manager-guard.guard';

describe('managerGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => managerGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
