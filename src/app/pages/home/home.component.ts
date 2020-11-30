import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];
  public from: number = 0;
  public to: number = 6;
  public preload: boolean = true;
  

  constructor(private productService: ProductService) { }

  ngOnInit(): void{
    this.getProducts();
  }

  getProducts(){
    this.preload = true;

    this.productService.getProducts(this.from, this.to)
        .subscribe( ({products}) => {
          this.preload = false;
          this.products = products
        });
  }

}
