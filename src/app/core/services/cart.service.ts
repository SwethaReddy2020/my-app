import { Injectable } from '@angular/core';
import { CartItem } from '../../../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  constructor() { }

  getItems(): CartItem[] {
    return this.cartItems;
  }

  addCartItem(item: CartItem) {
    this.cartItems.push(item);
  }

  removeCartItem(item: CartItem) {
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  updateCartItem(item: CartItem) {
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems[index] = item;
    }
  }

  clearCart() {
    this.cartItems = [];
  }
}
