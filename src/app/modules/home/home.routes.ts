import { Routes } from '@angular/router';

import { getCurrentUser } from '@core/utils/get-current-user';

export const homeRoutes: Routes = [
  {
    path: 'favorites',
    loadChildren: () =>
      import('@modules/favorites/favorites.routes').then(
        m => m.favoritesRoutes,
      ),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('@modules/history/history.routes').then(m => m.historyRoutes),
  },
  {
    path: 'tracks',
    resolve: {
      currentUser: getCurrentUser,
    },
    loadChildren: () =>
      import('@modules/tracks/tracks.routes').then(m => m.tracksRoutes),
  },
  {
    path: 'tracks/:category',
    loadChildren: () =>
      import('@modules/tracks/tracks.routes').then(m => m.tracksRoutes),
  },
  { path: '**', redirectTo: 'tracks' },
];
