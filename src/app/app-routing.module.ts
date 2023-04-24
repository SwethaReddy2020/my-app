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
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { MatCardModule } from '@angular/material/card';
import { FeedbackComponent } from './menu/feedback/feedback.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: UserListComponent , canActivate: [AuthGuard]},
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  
  },
  { path: 'profile', component: AccountPageComponent , canActivate: [AuthGuard]},
  { path: 'cart', component: CartComponent },
  { path: 'orderSummary', component: OrderSummaryComponent},
  { path: 'add-menu', component: AddMenuComponent },
  {path : 'feedback',component:FeedbackComponent},
  
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }