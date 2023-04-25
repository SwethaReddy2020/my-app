import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RequestInterceptor } from './request.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import { ProfileDetailsComponent } from './user/profile-details/profile-details.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { AccountPageComponent } from './user/account-page/account-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { PaymentComponent } from './order/payment/payment.component';
import { CartComponent } from './order/cart/cart.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { ChangeAddressComponent } from './user/change-address/change-address.component';
import { ChangeUserinfoComponent } from './user/change-userinfo/change-userinfo.component';
import { AlertComponent } from './alert/alert.component';
import {MatChipsModule} from '@angular/material/chips';
import { UserInfoComponent } from './user-info/user-info.component';
import { MyorderComponent } from './order/myorder/myorder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ProfileDetailsComponent,
    ChangePasswordComponent,
    AccountPageComponent,
    AboutComponent,
    RegisterComponent,
    UserListComponent,
    PaymentComponent,
    CartComponent,
    OrderSummaryComponent,
    DashboardComponent,
    ChangeAddressComponent,
    ChangeUserinfoComponent,
    AlertComponent,
    UserInfoComponent,
    MyorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatChipsModule

  ],
  providers: [ {
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,
  },
  { provide: 'LOCALSTORAGE', useValue: window.localStorage }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
