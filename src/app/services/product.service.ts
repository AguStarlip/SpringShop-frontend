import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product: Product;

  constructor(private http: HttpClient) { }

  get token():string{
    return localStorage.getItem('token') || ''
  }

  get header(){
    return {
      headers:{
        'x-token': this.token
      }
    }
  }

  TokenSave(token: string){
    localStorage.setItem('token', token);
  }

  getProducts(from: number=0, to: number=6){
    const api_url = `${url}/products?from=${from}&to=${to}`;
    return this.http.get<any>(api_url)
                    .pipe(
                      map(resp => {
                        const products =resp.products.map(product => new Product(product.name, product.unitPrice, product.stock, product.category, product._id, product.brand, product.img, product.description, product.user))
                        return {
                          products,
                          products_instock: resp.products_instock,
                          products_outstock: resp.products_outstock
                        }
                      })
                    );
  }

}
