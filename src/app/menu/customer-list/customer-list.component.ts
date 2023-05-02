import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { OrderService } from 'src/app/core/services/order.service';
import { User } from 'src/app/login/users';
import { OrderSummary } from 'src/app/model/OrderSummary';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
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
  sendMessage(orderId: string | undefined) {
    const message = "Your order is now complete. Please come and collect";
    this.orderService.sendOrderComplete(message, orderId ? orderId : "", this.user?.userId ? this.user?.userId : "")
    .subscribe((data: OrderSummary[]) => {
      this.orders = data;
    }); 
  }

}
