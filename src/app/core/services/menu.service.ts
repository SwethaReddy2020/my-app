import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Menu } from '../../../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:3000/menus';

  constructor(private http: HttpClient) { }

  getAllMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl);
  }

  getMenuById(id: string): Observable<Menu> {
    return this.http.get<Menu>(`${this.apiUrl}/${id}`);
  }

  addMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.apiUrl, menu);
  }

  updateMenu(menu: Menu): Observable<Menu> {
    return this.http.put<Menu>(`${this.apiUrl}/${menu.id}`, menu);
  }

  deleteMenu(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchMenus(keyword: string): Observable<Menu[]> {
    return this.getAllMenus().pipe(
      map(menus => menus.filter(menu =>
        menu.name.toLowerCase().includes(keyword.toLowerCase())
      ))
    );
  }
}
