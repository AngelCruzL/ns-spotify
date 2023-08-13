import { Routes } from '@angular/router';

import { SessionGuard } from '@core/guards/session.guard';
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
    canActivate: [SessionGuard],
    loadChildren: () =>
      import('./modules/home/home.routes').then(m => m.homeRoutes),
  },
];
