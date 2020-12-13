import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string;
  public categoryRoute: string;
  public productName: any;
  public searchTerm: string;
  public titleSubs$: Subscription; 
  public productNameSubs$: Subscription;
  public categoryRouteSubs$: Subscription;
  public searchTermSubs$: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService) { 
    this.titleSubs$ = this.getRouteData()
                          .subscribe(data => {
                            this.title = data.title;
                            document.title = `Spring Shop - ${this.title}`;
                          });
  
    this.categoryRouteSubs$ = this.activatedRoute.params
                          .subscribe(({categoryDescription}) => {
                            this.categoryRoute = categoryDescription;
                          });

    this.productNameSubs$ = this.activatedRoute.params
                          .subscribe(({id}) => {
                            this.productName = this.getProductName(id);
                          });

    this.searchTermSubs$ = this.activatedRoute.params
                          .subscribe(({term}) => {
                            this.searchTerm = term
                          });
  }

  ngOnDestroy(): void{
    this.titleSubs$.unsubscribe();
    this.categoryRouteSubs$.unsubscribe();
    this.productNameSubs$.unsubscribe();
    this.searchTermSubs$.unsubscribe();
  }

  getRouteData(){
    return this.router.events
                .pipe(
                  filter(event => event instanceof ActivationEnd),
                  filter((event: ActivationEnd) => event.snapshot.firstChild === null),
                  map(event => event.snapshot.data)
                );
  }

  getProductName(id: string){
    this.productService.getProductId(id)
                        .subscribe(product => {
                          this.productName = product.name;
                        })
  }

}
