import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export function injectSessionFnInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const token = inject(CookieService).get('tokenSession');

  try {
    let newRequest = request;
    newRequest = request.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
        angular_version: '16',
      },
    });

    return next(newRequest);
  } catch (error) {
    console.warn('Something went wrong', error);
    return next(request);
  }
}
