import { CanActivateFn } from '@angular/router';

export const juryGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
