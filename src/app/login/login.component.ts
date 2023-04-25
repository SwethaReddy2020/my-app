import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { UntypedFormGroup, UntypedFormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../core/services/authentication.service';
import { NotificationService } from '../core/services/notification.service';
import { AlertService } from '../core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading!: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
      private titleService: Title,
      private alertService: AlertService,
      private formBuilder: FormBuilder,
      private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
      this.titleService.setTitle('Login');
      this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
        userId: ['', Validators.required],
        password: ['', Validators.required]
    });

  }

  login() {
      const uId = this.loginForm.get('userId')?.value;
      const password = this.loginForm.get('password')?.value;

       // reset alerts on submit
       this.alertService.clear();

       // stop here if form is invalid
       if (this.loginForm.invalid) {
           return;
       }
      this.loading = true;
      this.authenticationService.login(uId, password)
          //.pipe(first())
          .subscribe({
              next: () => {
                  // get return url from query parameters or default to home page
                  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  this.router.navigateByUrl(returnUrl);
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }

  resetPassword() {
      this.router.navigate(['/auth/password-reset-request']);
  }
}
