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
    // if (route.routeConfig.path === 'login' && this.auth.isAuthenticated()) {
    //   this.router.navigate(['/admin']);
    //
    //   return false;
    // }

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/admin', 'login']);
    }

    return this.auth.isAuthenticated();
  }
}
