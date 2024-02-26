import { CanActivateFn } from '@angular/router';

export const managerGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
