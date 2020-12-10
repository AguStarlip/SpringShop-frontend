import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { ProductComponent } from './product/product.component';
import { SearchProductsComponent } from './search-products/search-products.component';

import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductComponent,
    SearchProductsComponent
  ],
  exports:[
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbModule,
    PipesModule
  ]
})
export class PagesModule { }
