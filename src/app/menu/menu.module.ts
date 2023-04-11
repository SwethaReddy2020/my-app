import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MenuListComponent } from './menu-list/menu-list.component';


@NgModule({
  declarations: [ MenuListComponent,
    AddMenuComponent,
    FeedbackComponent,
    CustomerListComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
