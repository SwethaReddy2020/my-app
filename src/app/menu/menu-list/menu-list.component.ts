
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'f:/my-app/src/app/core/services/menu.service';
import { Menu } from '../../../models/menu.model';

@Component({
  selector: 'menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getAllMenus().subscribe((menus: Menu[]) => {
      this.menus = menus;
    });
  }
}
