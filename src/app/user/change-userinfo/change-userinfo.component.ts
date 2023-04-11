import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-change-userinfo',
  templateUrl: './change-userinfo.component.html',
  styleUrls: ['./change-userinfo.component.scss']
})
export class ChangeUserinfoComponent implements OnInit {

  form!: FormGroup;
  disableSubmit!: boolean;

  constructor(private authService: AuthenticationService,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService) {

  }

  ngOnInit() {
    
  }

  updateUserInfo() {
    
  }

}
