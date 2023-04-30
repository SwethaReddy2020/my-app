import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { Category } from 'src/app/model/Category';
import { Item } from 'src/app/model/Item';
import { Menu } from 'src/app/model/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient, 
    private router: Router,
  ) { }

  addMenu(menu: Menu) {
    return this.http.post<Menu>('/api/menu', menu);
  }

  getMenuByUser(userId: String) {
    return this.http.get<Menu[]>(`/api/menu?userId=${userId}`);
  }

  getMenuDetail(menuId: String) {
    return this.http.get<Menu>(`/api/menu/${menuId}`)
  } 

  getMenuByStatus(status: String) {
    return this.http.get<Menu[]>(`/api/menu?status=${status}`);
  }

  addItem(item: Item) {
    return this.http.post<Item>('/api/item', item);
  }

  getItem() {
    return this.http.get<Item[]>('/api/item')
  }

  getCategory() {
    return this.http.get<Category[]>('/api/category')
  }
}
