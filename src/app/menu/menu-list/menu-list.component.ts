import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { Menu } from 'src/app/model/Menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = [];

  constructor(private menuService: MenuService,
      private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.menuService.getMenuByStatus("Active").subscribe((menus: Menu[]) => {
      this.menus = menus;
    });
  }
}
