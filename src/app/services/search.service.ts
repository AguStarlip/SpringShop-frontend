import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private productTransform(results: any[]): Product[]{
    return results.map(
      product => new Product(product.name, product.unitPrice, product.stock, product.category, product._id, product.brand, product.img, product.description, product.user)
    )
  }

  search(type: 'products'|'users', term: string){
    const api_url = `${url}/searchs/collection/${type}/${term}`;
    return this.http.get<any[]>(api_url)
                    .pipe(
                      map((resp: any) => {
                        switch (type) {
                          case 'products':
                            return this.productTransform(resp.results);
                            break;
                        
                          default:
                            return[];
                            break;
                        }
                      })
                    )
  }

}
