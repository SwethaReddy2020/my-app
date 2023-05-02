import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CartService } from 'src/app/core/services/cart.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { OrderService } from 'src/app/core/services/order.service';
import { User } from 'src/app/login/users';
import { OrderSummary } from 'src/app/model/OrderSummary';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent  implements OnInit {
  paymentForm!: FormGroup;
  submitted = false;
  user?: User;

  constructor(private formBuilder: FormBuilder, 
    private orderService: OrderService,
      private authService: AuthenticationService,
      private cartService: CartService,
      private router: Router,
      private notificationService: NotificationService,
      ) { }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      cardHolderName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expirationMonth: ['', Validators.required],
      expirationYear: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
    });
  }

  get f() {
    return this.paymentForm.controls;
  }

  submitForm() {
    this.submitted = true;
    this.user = this.authService.getCurrentUser();
    if(this.user) {
    this.orderService.placeOrder(this.user?.userId).subscribe((data: OrderSummary) => {
      this.notificationService.openSnackBar("You have successfully placed order")
      this.cartService.clearCart();
      this.router.navigate(['/myorder']); 
    }); }
    else {
      this.router.navigate(['/login']);
    }
    // Submit payment form
  }

}
