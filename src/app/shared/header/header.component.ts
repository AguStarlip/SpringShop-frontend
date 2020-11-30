import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit{

  public categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories()
                        .subscribe(categories => {
                          this.categories = categories;
                        });
  }

}
