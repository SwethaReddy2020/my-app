import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { User } from 'src/app/login/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  displayedColumns: string[] = ['userId', 'userName', 'userStatus', 'userPhone', 'userRole'];
  dataSource!  : MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private authenticationService: AuthenticationService) {}
  ngAfterViewInit() {
    this.authenticationService.getAll().subscribe(data => (this.dataSource = new MatTableDataSource(data)))
  //  this.dataSource.sort = this.sort;
  }

}
