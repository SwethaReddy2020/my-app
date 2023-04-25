import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
  { path: 'add', component: AddMenuComponent },
  { path: '', component: MenuListComponent },
  { path: 'myMenu', component: CustomerListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
