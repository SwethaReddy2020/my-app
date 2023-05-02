import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { CartItem } from 'src/app/model/CartItem';
import { Menu } from 'src/app/model/Menu';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  menu!: Menu;
  cartForm!: FormGroup;
  icons = [{ value: 'star', color: 'gold' }, { value: 'star', color: 'gold' }, { value: 'star', color: 'gold' }, { value: 'star_border', color: 'gray' }, { value: 'star_border', color: 'gray' }];


  constructor(
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private menuService: MenuService,
    private cartService: CartService,
    private router: Router,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    // Access the id parameter from the URL
    const id = this.route.snapshot.paramMap.get('menuId');
    if (id) {
      this.menuService.getMenuDetail(id).subscribe((data: Menu) => {
        this.menu = data;
      });
    } else {
      this.router.navigate(['/menu']);
    }
    this.cartForm = this.fb.group({
      quantity: [1,  Validators.required],
    });
  }

  addToCart() {
    const q = this.cartForm.get('quantity') ? this.cartForm.get('quantity')?.value : 0;
    const cartItem = new CartItem((this.menu.menuId ? this.menu.menuId : ""),
      (this.menu.item?.itemName ? this.menu.item?.itemName : ""),
      (this.menu.price ? this.menu.price : 0),
      (this.menu.menuImage ? this.menu.menuImage : ""),
      q)
    this.cartService.addCartItem(cartItem);
  }

}
