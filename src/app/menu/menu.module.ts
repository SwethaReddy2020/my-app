import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [ MenuListComponent,
    AddMenuComponent,
    FeedbackComponent,
    CustomerListComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MenuModule { }
