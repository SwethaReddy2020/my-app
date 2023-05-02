import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { User } from 'src/app/login/users';

@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.scss']
})
export class ChangeAddressComponent implements OnInit  {
  form!: FormGroup;
  disableSubmit!: boolean;
  user!: User | null

  constructor(private authenticationService: AuthenticationService,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService,   
      private fb: FormBuilder,
    ) {

  }
  ngOnInit(): void {
     this.user = this.authenticationService.userValue; 
   this.form = this.fb.group({
    profileId: ['', ],
    about: ['',{ validators: [Validators.required] }],
    location: ['', { validators: [Validators.required] }],
    rating: [3, { validators: [Validators.required] }],
  })
  }

  onSubmit() {
    if (this.form.invalid) {
      return
    }
    this.form.get("profileId")?.setValue(this.user?.userId);
    this.authenticationService.createSellerProfile(this.form.value)
    .subscribe({
        next: () => {
            //this.alertService.success('Registration successful', { keepAfterRouteChange: true });
            this.notificationService.openSnackBar('successfully Created Seller Profile')
           
        },
        error: error => {
          this.notificationService.openSnackBar('Error Created Seller Profile')
         //   this.alertService.error(error);
         //   this.loading = false;
        }
    });
  }

}
