import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';

import { HomeComponent } from './home/home.component';



const childRoutes: Routes = [

  {path:'', component: HomeComponent, data: { title: 'home'}},
  {path:'categories', component: CategoriesComponent, data: { title: 'categories' }},
  {path:'category/:categoryDescription/:id', component: CategoryComponent, data: { title: 'category' }}

]


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
