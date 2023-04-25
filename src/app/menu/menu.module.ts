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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { AddItemComponent } from './add-item/add-item.component';
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [ MenuListComponent,
    AddMenuComponent,
    FeedbackComponent,
    CustomerListComponent,
    AddItemComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
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
    MatProgressBarModule,
    MatTabsModule,
    MatInputModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatDialogModule
  ], providers: [  
    MatDatepickerModule,
    MatNativeDateModule  
  ]

})
export class MenuModule { }
