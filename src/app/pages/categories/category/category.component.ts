import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  public products: Product[] = [];
  public productTemp: Product;
  public preload: boolean = true;
  public imgTemp = [];
  public from: number = 0;
  public to: number = 10;
  public imgCategories = [
    {
      '_id': '5fa48d0b184cc52c4c5ed9c2',
      'description': 'Montañismo y Trekking',
      'img': '../../../assets/images/mont.jpg'
    },
    {
      '_id': '5fa48d22184cc52c4c5ed9c3',
      'description': 'Buceo',
      'img': '../../../assets/images/buc.jpg'
    },
    {
      '_id': '5fa48d52184cc52c4c5ed9c4',
      'description': 'Monopatines y Scooters',
      'img': '../../../assets/images/scoot.jpg'
    },
    {
      '_id': '5fa48d66184cc52c4c5ed9c5',
      'description': 'Esqui y Snowboard',
      'img': '../../../assets/images/esqui.jpg'
    },
    {
      '_id': '5fa48d7b184cc52c4c5ed9c6',
      'description': 'Ropa Deportiva',
      'img': '../../../assets/images/sport.jpg'
    },
    {
      '_id': '5fa48d8d184cc52c4c5ed9c7',
      'description': 'Ciclismo',
      'img': '../../../assets/images/ciclism.jpg'
    },
    {
      '_id': '5fa48dc0184cc52c4c5ed9c8',
      'description': 'Astronomía y Observación',
      'img': '../../../assets/images/astro.jpg'
    },
    {
      '_id': '5fa48df6184cc52c4c5ed9c9',
      'description': 'Paintball y Airsoft',
      'img': '../../../assets/images/paint.jpg'
    },
    {
      '_id': '5fbd68bdb0fc520034648d1a',
      'description': 'Camping',
      'img': '../../../assets/images/camp.jpg'
    },
  ]

  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit(): void {
    this.getProductsByCategory();

    this.imgCategoryId();
  }


  getProductsByCategory(){
    this.preload = true;

    this.productService.getProducts(this.from, this.to)
                        .subscribe(({products}) => {
                          for (let prod of products) {
                            this.activatedRoute.params
                                .subscribe(({id}) => {
                                  if(id === prod.category._id){
                                    this.preload = false;
                                    this.productTemp = prod;
                                    this.products.push(this.productTemp);
                                  }
                                })
                          }
                        })
  }

  imgCategoryId(){
    this.activatedRoute.params
    .subscribe(({id}) => {
      for (const imgCategory of this.imgCategories) {
        if(id === imgCategory._id){
          this.imgTemp.push(imgCategory);
          this.imgCategories = this.imgTemp;
        }
      }
    });
  }

}
