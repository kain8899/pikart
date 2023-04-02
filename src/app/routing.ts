import { Routes } from '@angular/router';
//Questo script di routing è necessario per mappare le nuove pagine
const Routing: Routes = [
  {
    path: 'race',
    loadChildren: () =>
      import('./race/race.module').then((m) => m.RaceModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./teams/teams.module').then((m) => m.TeamsModule),
  },
  // {
  //   path: 'crafted/pages/wizards',
  //   loadChildren: () =>
  //     import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  // },
  // {
  //   path: 'crafted/widgets',
  //   loadChildren: () =>
  //     import('../modules/widgets-examples/widgets-examples.module').then(
  //       (m) => m.WidgetsExamplesModule
  //     ),
  // },
  // {
  //   path: 'apps/chat',
  //   loadChildren: () =>
  //     import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  // },
  {
    path: '',
    redirectTo: '/race/list',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'race/list',
  },
];

export { Routing };
