import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export function getCurrentUser(): { [key: string]: string } {
  const cookieService = inject(CookieService);
  const token = cookieService.get('token') as string;

  return {
    email: 'me@angelcruzl.dev',
    name: 'Ángel Cruz',
    role: 'admin',
    id: '123',
    token,
  };
}
