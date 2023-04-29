import { Component } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {
  cartItems = [
    { name: 'Product 1', price: 9.99, quantity: 2 },
    { name: 'Product 2', price: 19.99, quantity: 1 },
    { name: 'Product 3', price: 14.99, quantity: 3 }
  ];

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
