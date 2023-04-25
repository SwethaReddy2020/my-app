import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-change-userinfo',
  templateUrl: './change-userinfo.component.html',
  styleUrls: ['./change-userinfo.component.scss']
})
export class ChangeUserinfoComponent implements OnInit {

  updateForm!: FormGroup
  loading!: boolean;

  constructor(private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private formBuilder: FormBuilder) {

  }

  
  ngOnInit() {
    const user = this.authenticationService.userValue; 
    this.updateForm = this.formBuilder.group({
      userId:[user?.userId, Validators.required],
      firstName: [user?.firstName, Validators.required],
      lastName: [user?.lastName, Validators.required],
      address: [user?.address, Validators.required],
      contactNumber: [user?.contactNumber, Validators.required],
      emailId: [user?.emailId, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.updateForm.invalid) {
      return
    }
 
    this.authenticationService.updateUserInfo(this.updateForm.value)
    .subscribe({
        next: () => {
            this.alertService.success('Registration successful', { keepAfterRouteChange: true });
            //this.notificationService.openSnackBar('Registration successful')
           
        },
        error: error => {
          
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }

}
