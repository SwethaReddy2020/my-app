import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { OrderSummary } from 'src/app/model/OrderSummary';
import { OrderSummaryDetail } from 'src/app/model/OrderSummaryDetail';
import { CartService } from './cart.service';
import { OrderDetails } from 'src/app/model/orderDetail';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor( @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http: HttpClient, 
  private router: Router,
  private cartService: CartService) { }

  getMyOrders(userId: String) {
    return this.http.get<OrderSummary[]>(`/api/order?userId=${userId}`);
  }

  getOrderDetails(orderId: String) {
    return this.http.get<OrderSummaryDetail>(`/api/order/details?orderId=${orderId}`);
  }

  placeOrder(userId: String) {
    const orders =  this.getCartDetails();
    return this.http.post<OrderSummary>(`/api/order?userId=${userId}`, orders);
  }

  private getCartDetails() {
    const cart = this.cartService.getItems();
   return cart.map( c => {
        const order = new OrderDetails(c.menuId, c.quantity, (c.price * c.quantity));
        return order;
    }
    );
  }
}
