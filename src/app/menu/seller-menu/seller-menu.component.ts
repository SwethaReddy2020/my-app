import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { User } from 'src/app/login/users';
import { Menu } from 'src/app/model/Menu';

@Component({
  selector: 'app-seller-menu',
  templateUrl: './seller-menu.component.html',
  styleUrls: ['./seller-menu.component.scss']
})
export class SellerMenuComponent implements OnInit {
  menus: Menu[] = [];
  user?: User;

  constructor(private menuService: MenuService,
      private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    if(this.user) {
    this.menuService.getMenuByUser(this.user?.userId).subscribe((menus: Menu[]) => {
      this.menus = menus;
    }); }
    else {
      this.router.navigate(['/login']);
    }
  }

}
