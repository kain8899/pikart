import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



//import { TranslateModule } from '@ngx-translate/core';
//import { TranslationModule } from '../../modules/i18n';
import { LayoutComponent } from './layout.component';

import { Routing } from '../routing';

//Layout module chiama lo script di routing delle pagine
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

//nell'attribute declaration vengono dichiarati i component di layout, header e footer

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LayoutModule { }
