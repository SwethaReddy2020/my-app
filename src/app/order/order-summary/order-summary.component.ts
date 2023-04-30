import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItem } from 'src/app/model/CartItem';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  cartItems : CartItem[] = [];

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  incrementQuantity(item: any) {
    item.quantity++;
  }

  removeItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart() {
    this.cartItems = [];
  }

  getSubtotal() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTax() {
    return this.getSubtotal() * 0.1;
  }

  getTotal() {
    return this.getSubtotal() + this.getTax();
  }
}
