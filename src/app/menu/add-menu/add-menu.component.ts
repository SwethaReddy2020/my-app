import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { Category } from 'src/app/model/Category';
import { Item } from 'src/app/model/Item';
import { AddItemComponent } from '../add-item/add-item.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { User } from 'src/app/login/users';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {
  menuForm!: FormGroup;
  loading: boolean = false;
  categories: Category[] = [];
  items: Item[] = [];
  user?: User;

  constructor(private fb: FormBuilder,
     private alertService: AlertService, 
     private menuService: MenuService,
     private notificationService: NotificationService,
     private router: Router,
     public dialog: MatDialog,
     private authService: AuthenticationService) {
    
  }

  ngOnInit() {
    this.menuService.getItem().subscribe(data => {this.items = data});
    this.menuService.getCategory().subscribe(data => {this.categories = data});
    this.user = this.authService.getCurrentUser();
    this.menuForm = this.fb.group({
      userId: ['', ],
      itemId: ['', Validators.required],
      availableDate: ['', Validators.required],
      availableTime: ['', Validators.required],
      availabilityTime: ['', Validators.required],
      status: ['Active', Validators.required],
      ingredients: ['', Validators.required],
      recipe: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      sellingType: ['All', Validators.required],
      categoryId: ['', Validators.required],
      menuImage: ['', Validators.required]
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.data}`);
      this.menuService.addItem(result.data).subscribe();
    });
  }

  submitForm() {
    const dateValue = this.menuForm.get('availableDate')?.value;
    const timeValue = this.menuForm.get('availableTime')?.value;
    console.log(dateValue.getTime() + (parseFloat(timeValue) * 3600000));
    const dateTime = new Date(dateValue.getTime() + (parseFloat(timeValue)  * 3600000));
    this.menuForm.get("userId")?.setValue(this.user?.userId);
    this.menuForm.get("availabilityTime")?.setValue(dateTime);
    this.menuForm.get("menuImage")?.setValue(dateTime);
    if (this.menuForm.invalid) {
      return
    }
    this.loading = true;
    let menu = this.menuForm.value;
    console.log(menu);
    this.menuService.addMenu(this.menuForm.value)
    .subscribe({
        next: () => {
           // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
            this.notificationService.openSnackBar('Menu Added Successfully')
            this.router.navigate(['/menu/Mymenu']);
        },
        error: error => {
          this.notificationService.openSnackBar('Some thing went wrong!!!')
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }
}
