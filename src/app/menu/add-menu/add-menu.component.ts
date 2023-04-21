import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent {
  menuForm: FormGroup;

  categories = [
    { value: 'appetizers', viewValue: 'Appetizers' },
    { value: 'entrees', viewValue: 'Entrees' },
    { value: 'sides', viewValue: 'Sides' },
    { value: 'desserts', viewValue: 'Desserts' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.menuForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      category: ['', Validators.required],
      image: ['']
    });
  }

  onSubmit() {
    if (this.menuForm.invalid) {
      return;
    }

    // Handle form submission here
    console.log(this.menuForm.value);
  }
}

