import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './order/cart/cart.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { AccountPageComponent } from './user/account-page/account-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MyorderComponent } from './order/myorder/myorder.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: UserListComponent , canActivate: [AuthGuard]},
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule),
   canActivate: [AuthGuard]
  },
  {path: 'myorder', component: MyorderComponent},
  { path: 'myaccount', component: AccountPageComponent , canActivate: [AuthGuard]},
  { path: 'profile/:userId', component: UserInfoComponent },
  { path: 'cart', component: CartComponent , canActivate: [AuthGuard]},
  { path: 'orderSummary', component: OrderSummaryComponent , canActivate: [AuthGuard]},
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
