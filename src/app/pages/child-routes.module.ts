import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { ProductComponent } from './product/product.component';
import { SearchProductsComponent } from './search-products/search-products.component';



const childRoutes: Routes = [

  {path:'', component: HomeComponent, data: { title: 'Home'}},
  {path:'categories', component: CategoriesComponent, data: { title: 'Categorías' }},
  {path:'category/:categoryDescription/:id', component: CategoryComponent, data: { title: 'Categoría' }},
  {path:'product/:id', component: ProductComponent, data: {title: 'Producto'}},
  {path:'search/products/:term', component: SearchProductsComponent, data: {title: 'Búsqueda'}}

]


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
