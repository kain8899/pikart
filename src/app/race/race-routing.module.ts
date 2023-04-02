import { RaceEditComponent } from './race-edit/race-edit.component';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceNewComponent } from './race-new/race-new.component';

import { RaceModule } from './race.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RaceComponent } from './race.component';

const routes: Routes = [
  {
    path: '',
    component: RaceComponent,
    children: [
      {
        path: 'add',
        component: RaceNewComponent
      },
      {
        path: 'list',
        component: RaceListComponent
      },
      {
        path: 'edit/:id',
        component: RaceEditComponent
      },
      { path: '', redirectTo: 'race/list', pathMatch: 'full' },
      { path: '**', redirectTo: 'race/list', pathMatch: 'full' },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacePageRoutingModule { }
