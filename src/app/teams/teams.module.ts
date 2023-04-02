import { TeamsPageRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule, NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { TeamsNewComponent } from './teams-new/teams-new.component';
import { TeamsEditComponent } from './teams-edit/teams-edit.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    TeamsComponent,
    TeamsNewComponent,
    TeamsEditComponent,
    TeamsListComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TeamsPageRoutingModule
  ]
})
export class TeamsModule { }
