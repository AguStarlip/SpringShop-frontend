import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],
  exports:[
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbModule
  ]
})
export class PagesModule { }
