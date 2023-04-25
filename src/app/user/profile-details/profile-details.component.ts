import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { User } from 'src/app/login/users';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  user: User | undefined

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
     this.user = this.authenticationService.userValue != null ? this.authenticationService.userValue :  undefined; 
  }

}