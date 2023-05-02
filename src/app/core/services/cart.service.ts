import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { CartItem } from 'src/app/model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  cartItems: CartItem[] = [];
  private cartSubject: BehaviorSubject<CartItem[]>;
  public cart: Observable<CartItem[] | null>;

  constructor() {
    this.cartSubject = new BehaviorSubject(this.cartItems);
    this.cart = this.cartSubject.asObservable();
   }

  getItems(): CartItem[] {
    return this.cartItems;
  }

  addCartItem(item: CartItem) {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
  }

  removeCartItem(item: CartItem) {
    const index = this.cartItems.findIndex((cartItem) => cartItem.menuId === item.menuId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    this.cartSubject.next(this.cartItems);
  }

  updateCartItem(item: CartItem) {
    const index = this.cartItems.findIndex((cartItem) => cartItem.menuId === item.menuId);
    if (index !== -1) {
      this.cartItems[index] = item;
    }
    this.cartSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }
}
