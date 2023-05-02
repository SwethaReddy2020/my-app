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
    this.orderService.getMyOrders(this.user?.userId).subscribe((data: OrderSummary[]) => {
      this.orders = data;
    }); }
    else {
      this.router.navigate(['/login']);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(FeedbackComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.data}`);
      //this.menuService.addItem(result.data).subscribe();
    });
  }

}
