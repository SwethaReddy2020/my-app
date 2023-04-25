import { Component } from '@angular/core';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent {
  orders = [
    { orderId: 1, date: '2022-02-01', total: 100, paymentStatus: "jj", orderStatus: "gd" },
    { orderId: 2, date: '2022-03-15', total: 50, paymentStatus: "jj" , orderStatus: "gd"},
    { orderId: 3, date: '2022-04-20', total: 75, paymentStatus: "jj" , orderStatus: "gd"}
  ];
}
