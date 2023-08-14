import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export function sessionGuardFn(): boolean {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  try {
    const tokenSession: boolean = cookieService.check('tokenSession');

    if (!tokenSession) router.navigateByUrl('/auth/login');
    
    return tokenSession;
  } catch (error) {
    console.warn('Something went wrong', error);
    return false;
  }
}
