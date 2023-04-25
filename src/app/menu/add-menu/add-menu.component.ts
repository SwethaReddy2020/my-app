import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {
  menuForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.menuForm = this.fb.group({
      menu_id: ['', Validators.required],
      user_id: ['', Validators.required],
      item_id: ['', Validators.required],
      availability_time: ['', Validators.required],
      status: ['', Validators.required],
      ingredients: ['', Validators.required],
      recipe: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      selling_type: ['', Validators.required],
      category_id: ['', Validators.required],
      menu_image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.menuForm.valid) {
      console.log(this.menuForm.value);

      const formData = new FormData();
      formData.append('menu_id', this.menuForm.get('menu_id').value);
      formData.append('user_id', this.menuForm.get('user_id').value);
      formData.append('item_id', this.menuForm.get('item_id').value);
      formData.append('availability_time', this.menuForm.get('availability_time').value);
      formData.append('status', this.menuForm.get('status').value);
      formData.append('ingredients', this.menuForm.get('ingredients').value);
      formData.append('recipe', this.menuForm.get('recipe').value);
      formData.append('price', this.menuForm.get('price').value);
      formData.append('quantity', this.menuForm.get('quantity').value);
      formData.append('selling_type', this.menuForm.get('selling_type').value);
      formData.append('category_id', this.menuForm.get('category_id').value);
      formData.append('menu_image', this.menuForm.get('menu_image').value);

      this.http.post('http://your-api-url.com/add-menu', formData)
        .subscribe(response => {
          console.log(response);
          // Show success message or navigate to menu list page
        }, error => {
          console.log(error);
          // Show error message
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
