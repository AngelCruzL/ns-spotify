import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard implements CanActivate {
  constructor(private cookie: CookieService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  checkCookieSession(): boolean {
    try {
      const tokenSession: boolean = this.cookie.check('tokenSession');

      if (!tokenSession) this.router.navigateByUrl('/auth/login');

      return tokenSession;
    } catch (error) {
      console.warn('Something went wrong', error);
      return false;
    }
  }
}
