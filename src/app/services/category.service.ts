import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(){
    const api_url = `${url}/categories`;
    return this.http.get(api_url)
                    .pipe(
                      map((resp: {ok: true, categories: Category[]})=> resp.categories)
                    );
  }

  getCategoryId(_id: string){
    const api_url= `${url}/categories/${_id}`;
    return this.http.get(api_url)
                    .pipe(
                      map((resp: {ok: true, category: Category[]}) => resp.category)
                    );
  }
  

}
