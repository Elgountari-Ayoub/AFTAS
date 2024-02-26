import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { juryGuardGuard } from './jury-guard.guard';

describe('juryGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => juryGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
