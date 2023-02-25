import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {
  constructor(private cookie: CookieService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.cookie.get('tokenSession');

    try {
      let newRequest = request;
      newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });

      return next.handle(newRequest);
    } catch (error) {
      console.warn('Something went wrong', error);
      return next.handle(request);
    }
  }
}
