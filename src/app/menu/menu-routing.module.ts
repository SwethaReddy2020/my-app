import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { DetailsComponent } from './details/details.component';
import { SellerComponent } from './seller/seller.component';


const routes: Routes = [
  { path: 'add', component: AddMenuComponent,    canActivate: [AuthGuard] },
  { path: 'details/:menuId', component: DetailsComponent },
  { path: '', component: MenuListComponent },
  { path: 'myMenu', component: SellerComponent,    canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
