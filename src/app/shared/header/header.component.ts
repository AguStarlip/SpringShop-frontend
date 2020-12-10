import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit{

  public categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories()
                        .subscribe(categories => {
                          this.categories = categories;
                        });
  }

  redirectToProductSearch(term: string){
    if(!/^[0-9A-Za-z\s\-]+$/i.test(term)){
      return false;
    }
    
    return this.router.navigateByUrl(`/home/search/products/${term}`);
  }

}
