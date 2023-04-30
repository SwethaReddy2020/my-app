import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CartService } from 'src/app/core/services/cart.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { CartItem } from 'src/app/model/CartItem';
import { Menu } from 'src/app/model/Menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = [];
  cart: CartItem[] = [];

  constructor(private menuService: MenuService,
      private authService: AuthenticationService,
      private cartService: CartService) { }

  ngOnInit(): void {
    this.menuService.getMenuByStatus("Active").subscribe((menus: Menu[]) => {
      this.menus = menus;
    });
  }

  addToCart(menu: Menu) {
     const cartItem = new CartItem((menu.menuId ? menu.menuId : ""),
     ( menu.item?.itemName ?  menu.item?.itemName : ""),
      (menu.price ? menu.price : 0 ), 
      (menu.menuImage ? menu.menuImage : ""),
       1)
    this.cartService.addCartItem(cartItem);
  }
}
