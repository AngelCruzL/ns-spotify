import { Routes } from '@angular/router';

import { sessionGuardFn } from '@core/guards/session-fn.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.routes').then(m => m.authRoutes),
  },
  {
    path: '',
    component: HomePageComponent,
    canActivate: [sessionGuardFn],
    loadChildren: () =>
      import('./modules/home/home.routes').then(m => m.homeRoutes),
  },
];
