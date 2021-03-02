import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuth = this.auth.isAuthenticated();

    if (route.routeConfig.path === 'login') {
      if (isAuth) {
        this.router.navigate(['/admin']);
      }

      return !isAuth;
    }

    if (!isAuth) {
      this.router.navigate(['/admin', 'login']);
    }

    return isAuth;
  }
}
