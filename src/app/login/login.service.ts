import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { User } from './users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;

  isAdmin: boolean = false;
  constructor( @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http: HttpClient) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initialized...');
   }

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'Admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (email === 'user@gmail.com' && password === 'user') {
       this.isLoggedIn = true;
       this.isAdmin = false;
    }
      return this.isLoggedIn;
  }

  getUsers(){
    return this.http.get<User[]>('/user');
  }
}
