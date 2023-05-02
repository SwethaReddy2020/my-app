import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { interval, switchMap, timer } from 'rxjs';
import { Subscription } from 'rxjs';

 import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { User } from './login/users';
import { CartItem } from './model/CartItem';
import { CartService } from './core/services/cart.service';
import { UsernotifiyService } from './core/services/usernotifiy.service';
import { CustomNotification } from './model/Notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit, OnDestroy, AfterViewInit  {

  title = 'my-app';
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean = false;
 
  notifications?: CustomNotification[] | null;
  user?: User | null;
  cart?: CartItem[] | null;
  
  private autoLogoutSubscription: Subscription = new Subscription;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    public spinnerService: SpinnerService,
    private authService: AuthenticationService,
    private cartService: CartService,
   private usernotifiyService: UsernotifiyService) {

    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
}

ngOnInit(): void {
 // const user = this.authService.getCurrentUser();
  this.authService.user.subscribe(x => this.user = x);
  this.cartService.cart.subscribe(c => this.cart = c);
  this.usernotifiyService.notity.subscribe(n => this.notifications = n);
  const source$ = interval(20000); // interval of 20 seconds
  const http$ = source$.pipe(
    switchMap(() => this.usernotifiyService.getNotification())
  );
  http$.subscribe(data => {
    console.log(data);
  });
}

ngOnDestroy(): void {
  // tslint:disable-next-line: deprecation
  this.mobileQuery.removeListener(this._mobileQueryListener);
  this.autoLogoutSubscription.unsubscribe();
}

ngAfterViewInit(): void {
  this.changeDetectorRef.detectChanges();
}

logout(){
  this.authService.logout();
}

}
