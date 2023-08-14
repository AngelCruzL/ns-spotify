import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { injectSessionFnInterceptor } from '@core/interceptors/inject-session-fn.interceptor';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(BrowserModule),
    CookieService,
    provideHttpClient(withInterceptors([injectSessionFnInterceptor])),
  ],
}).catch(err => console.error(err));
