import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'persons',
    loadChildren: () =>
      import('@bulding-home/client-person-lib').then(
        (m) => m.clientPersonLibRoutes
      ),
  },
];
