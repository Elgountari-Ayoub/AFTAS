import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthenticationService);
  const router: Router = inject(Router);
  const protectedRoutes: string[] = [
    '/manager-dash',
    '/member-dash',
    '/jury-dash',
  ];

  debugger;
  console.log(state.url);
  if (!protectedRoutes.includes(state.url)) return true;

  return protectedRoutes.includes(state.url) &&
    authService.getAuthUser() == null
    ? router.navigate(['/login'])
    : true;
};
