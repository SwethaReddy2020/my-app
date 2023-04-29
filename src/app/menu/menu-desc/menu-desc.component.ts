import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'f:/my-app/src/app/core/services/menu.service';
import { Menu } from '../../../models/menu.model';

@Component({
  selector: 'app-menu-desc',
  templateUrl: './menu-desc.component.html',
  styleUrls: ['./menu-desc.component.css']
})
export class MenuDescriptionComponent implements OnInit {
    menu!: Menu;
    quantity = 1;
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private route: ActivatedRoute,
      private menuService: MenuService
    ) {}

  
    ngOnInit(): void {
        // Access the id parameter from the URL
        const id = this.route.snapshot.paramMap.get('id');
        // Retrieve the menu with the corresponding id and assign it to the menu property
        // You can replace this with a call to a service that retrieves the menu from a server
        this.menu = {
          id: id || '',
          name: 'Menu Item',
          restaurant: 'Restaurant',
          category: 'Category',
          price: 9.99,
          image: 'https://example.com/image.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
      }
    
  addToCart(): void {
    // Here you could implement a shopping cart service to add the menu item and quantity to the cart
    console.log(`Added ${this.quantity} ${this.menu.name} to cart.`);
  }
}
