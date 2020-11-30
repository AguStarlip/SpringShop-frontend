import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[] = [];
  public preload: boolean = true;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.preload = true

    this.categoryService.getCategories()
                        .subscribe(categories => {
                          this.preload = false;
                          this.categories = categories;
                        });
  }

}
