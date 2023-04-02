
import { RaceNewComponent } from './race-new/race-new.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule, NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';

import { RaceComponent } from './race.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';

import { RacePageRoutingModule } from './race-routing.module';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceEditComponent } from './race-edit/race-edit.component';


import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    RaceListComponent,
    RaceDetailComponent,
    RaceComponent,
    RaceNewComponent,
    RaceEditComponent,

  ],
  imports: [
    FormsModule,
    NgbModule,
    CommonModule,
    RacePageRoutingModule,
    DataTablesModule
  ]
})
export class RaceModule { }
