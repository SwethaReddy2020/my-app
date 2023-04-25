import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import * as moment from 'moment';
import { of, EMPTY, BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/login/users';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;


  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient, 
    @Inject('LOCALSTORAGE') private localStorage: Storage,
    private router: Router,
    
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }


getCurrentUser(): any {
    // return JSON.parse(this.localStorage.getItem('user'));
    let user  = this.localStorage.getItem('user');
    if(user != null) {
      return  JSON.parse(user);
    }
}


changePassword(email: string, currentPwd: string, newPwd: string) {
    return of(true).pipe(delay(1000));
}

login(userId: string, password: string) {
    return this.http.post<User>('user/login', { userId, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
}

updateUserInfo(user: User) {
    return this.http.put('/user', user);
}

logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
}

regiserUser(user: User) {
    return this.http.post('/user/register', user);
}

getAll() {
    return this.http.get<User[]>('/user');
}
getById(id: string) {
    return this.http.get<User>(`/user/${id}`);
}
}
