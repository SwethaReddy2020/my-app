import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { NotificationService } from '../services/notification.service';
import * as moment from 'moment';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /* canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
 */
  constructor(private router: Router,
    private notificationService: NotificationService,
    private authService: AuthenticationService) { }
   canActivate() {
        const user = this.authService.getCurrentUser();

        if (user && user.expiration) {

            if (moment() < moment(user.expiration)) {
                return true;
            } else {
                this.notificationService.openSnackBar('Your session has expired');
                this.router.navigate(['auth/login']);
                return false;
            }
        }

        this.router.navigate(['auth/login']);
        return false;
    }
  
}


