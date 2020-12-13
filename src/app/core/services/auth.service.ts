import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../../shared/models/user.model';
import { LoginForm } from '../../shared/interfaces/login-form.interface';
import { tap } from 'rxjs/operators';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User;

  constructor(private http: HttpClient) { }

  get token(): string{
    return localStorage.getItem('token') || ''
  }

  get headers(){
    return {
      header: {
        'x-token': this.token
      }
    }
  }

  get uid(): string{
    return this.user.uid || ''; 
  }

  get role(): 'ADMIN_ROLE' | 'USER_ROLE' {
    return this.user.role;
  }

  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  login(formData: LoginForm){
    const api_url = `${url}/login`;
    return this.http.post(api_url, formData)
                    .pipe(
                      tap((resp: any) => {
                        this.saveToken(resp.token)
                      })
                    )
  }

  logout(){
    localStorage.removeItem('token');
  }

}
