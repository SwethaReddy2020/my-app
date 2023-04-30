import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { OrderService } from 'src/app/core/services/order.service';
import { User } from 'src/app/login/users';
import { OrderSummary } from 'src/app/model/OrderSummary';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {
  orders : OrderSummary[] = [];
  user?: User

  constructor(private orderService: OrderService,
      private authService: AuthenticationService,
      private router: Router) { }


  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if(this.user) {
    this.orderService.getMyOrders(this.user?.userId).subscribe((data: OrderSummary[]) => {
      this.orders = data;
    }); }
    else {
      this.router.navigate(['/login']);
    }
  }
}
