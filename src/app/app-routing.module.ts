import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesRoutingModule } from './modules/pages/pages.routing';
import { AuthRoutingModule } from './modules/auth/auth.routing';

const routes: Routes = [

  {path:'', redirectTo:'/home', pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' }),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
