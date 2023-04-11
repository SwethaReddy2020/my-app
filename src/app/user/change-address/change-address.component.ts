import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.scss']
})
export class ChangeAddressComponent implements OnInit  {
  form!: FormGroup;
  disableSubmit!: boolean;

  constructor(private authService: AuthenticationService,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService,   
      private fb: FormBuilder,
    ) {

  }
  ngOnInit(): void {
   this.form = this.fb.group({
    addressLine1: ['', { validators: [Validators.required] }],
    addressLine2: [''],
    city: ['', { validators: [Validators.required] }],
    state: ['', { validators: [Validators.required] }],
    country: [''],
    zipCode: [''],
  })
  }

  updateAddress() {

  }

}
