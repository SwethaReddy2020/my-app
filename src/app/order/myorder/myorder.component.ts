import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { OrderService } from 'src/app/core/services/order.service';
import { User } from 'src/app/login/users';
import { FeedbackComponent } from 'src/app/menu/feedback/feedback.component';
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
      private router: Router,
      public dialog: MatDialog) { }


  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if(this.user) {
      this.getMyOrder(this.user.userId);
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  getMyOrder(user : string) {
    this.orderService.getMyOrders(user).subscribe((data: OrderSummary[]) => {
      this.orders = data;
    });
  }

  openDialog(orderId: string | undefined) {
    const dialogRef = this.dialog.open(FeedbackComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.orderService.addReviews(orderId ? orderId: "",result.data.comment, result.data.rating).subscribe(data =>{
        if(this.user) {
          this.getMyOrder(this.user.userId);
        }
      });
    });
  }

  getNotFilledCount(filledCount: string) {
    return 5 - parseInt(filledCount);
  }

  arrayFromNum(num: number): number[] {
    return Array(num).fill(0).map((x, i) => i);
  }
  arrayFromNumber(num: string): number[] {
    return Array(parseInt(num)).fill(0).map((x, i) => i);
  }


}
