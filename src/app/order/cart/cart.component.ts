import { Component, OnInit } from '@angular/core';
import { CartService } from 'f:/my-app/src/app/core/services/cart.service';
import { CartItem } from '../../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  removeItem(item: CartItem) {
    this.cartService.removeCartItem(item);
    this.cartItems = this.cartService.getItems();
  }

  getSubtotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  getTax(): number {
    return this.getSubtotal() * 0.1;
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }

  incrementQuantity(item: CartItem) {
    item.quantity++;
    this.cartService.updateCartItem(item);
  }

  decrementQuantity(item: CartItem) {
    item.quantity--;
    this.cartService.updateCartItem(item);
  }
}
