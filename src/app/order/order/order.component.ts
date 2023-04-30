import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { OrderService } from 'src/app/core/services/order.service';
import { OrderSummaryDetail } from 'src/app/model/OrderSummaryDetail';
import { OrderDetails } from 'src/app/model/orderDetail';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  displayedColumns = ['itemName', 'subTotal', 'quantity'];
  order?: OrderSummaryDetail
  orderId?: string | null
  orderItems: OrderDetails[] = [];

  constructor(private orderService: OrderService,
    private authService: AuthenticationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.orderId = params.get('orderId');
      this.getOrderDetail();
    });
  }

  getOrderDetail() {
    if(this.orderId) {
      this.orderService.getOrderDetails(this.orderId)
      .subscribe(data => ( 
        this.setData(data)
      ))
    } else {
      
    }
  }

  setData(data: OrderSummaryDetail) {
    this.order = data;
    this.orderItems = data.orderItems ? data.orderItems : [] ;
  }
}
