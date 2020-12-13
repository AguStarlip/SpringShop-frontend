import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../core/services/search.service';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.sass']
})
export class SearchProductsComponent implements OnInit {

  public products: Product[] = [];
  public preload: boolean = true;

  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
                        .subscribe(({term}) => this.productsSearch(term));
  }

  productsSearch(term: string){
    this.preload = true;

    this.searchService.search('products', term)
                      .subscribe(products => {
                        this.preload = false;
                        this.products = products;
                      });
  }

}
