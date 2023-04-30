import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs';

 import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { User } from './login/users';
import { CartItem } from './model/CartItem';
import { CartService } from './core/services/cart.service';

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
 
  user?: User | null;
  cart?: CartItem[] | null;
  
  private autoLogoutSubscription: Subscription = new Subscription;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    public spinnerService: SpinnerService,
    private authService: AuthenticationService,
    private cartService: CartService,
    private authGuard: AuthGuard) {

    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
}

ngOnInit(): void {
 // const user = this.authService.getCurrentUser();
  this.authService.user.subscribe(x => this.user = x);
  this.cartService.cart.subscribe(c => this.cart = c);
 

  // Auto log-out subscription
 // const timer$ = timer(2000, 5000);
  //this.autoLogoutSubscription = timer$.subscribe(() => {
   //   this.authGuard.canActivate();
 // });
}

ngOnDestroy(): void {
  // tslint:disable-next-line: deprecation
  this.mobileQuery.removeListener(this._mobileQueryListener);
  this.autoLogoutSubscription.unsubscribe();
}

ngAfterViewInit(): void {
  this.changeDetectorRef.detectChanges();
}

}
