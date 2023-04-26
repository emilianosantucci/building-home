import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'persons',
    loadChildren: () =>
      import('@building-home/client-lib-person').then((m) => m.personRoutes),
  },
];
