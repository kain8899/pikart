import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams.component';
import { TeamsNewComponent } from './teams-new/teams-new.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsEditComponent } from './teams-edit/teams-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    children: [
      {
        path: 'add',
        component: TeamsNewComponent
      },
      {
        path: 'list',
        component: TeamsListComponent
      },
      {
        path: 'edit/:id',
        component: TeamsEditComponent
      },
      //{ path: '', redirectTo: 'teams/list', pathMatch: 'full' },
      //{ path: '**', redirectTo: 'teams/list', pathMatch: 'full' },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsPageRoutingModule { }
