import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, interval, map, switchMap } from 'rxjs';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { CustomNotification } from 'src/app/model/Notification';

@Injectable({
  providedIn: 'root'
})
export class UsernotifiyService {

  private notifySubject: BehaviorSubject<CustomNotification[]>;
    public notity: Observable<CustomNotification[] | null>;
    notifications : CustomNotification[] = [];
    source$ = interval(20000);
    userId?: string

    constructor(
        @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
        private http: HttpClient,
        @Inject('LOCALSTORAGE') private localStorage: Storage,
        private router: Router,

    ) {
      this.notifySubject = new BehaviorSubject(this.notifications);
      this.notity = this.notifySubject.asObservable();
      this.getCurrentUser();
      interval(20000).pipe(
        switchMap(() => this.getNotification()));
      
    }

    getCurrentUser(): any {
      // return JSON.parse(this.localStorage.getItem('user'));
      let user = this.localStorage.getItem('user');
      if (user != null) {
          const logginUser = JSON.parse(user);
          this.userId = logginUser.userId;
      }
  }

    getNotification() {
      return this.http.get<CustomNotification[]>(`/api/notifiy?userId=${this.userId}`)
      .pipe(map((notify: CustomNotification[]) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.notifySubject.next(notify);
        return notify;
    }));
    }
   
}
