import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';
import { NotificationService } from '../core/services/notification.service';
import { first } from 'rxjs';
import { AlertService } from '../core/services/alert.service';


interface RegisterForm {
  firstName: string;
  lastName: string;
  address: string;
  contactNumber: string;
  email: string;
  profilePicture: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loading = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {
}

  
  registerForm: FormGroup = new FormGroup({
    userId: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contactNumber: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required, Validators.email]),
   // profilePicture: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userId:['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
     // profilePicture: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return
    }
    this.loading = true;
    this.authenticationService.regiserUser(this.registerForm.value).pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Registration successful', { keepAfterRouteChange: true });
            //this.notificationService.openSnackBar('Registration successful')
            this.router.navigate(['/login']);
        },
        error: error => {
          
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }

}
