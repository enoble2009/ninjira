import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule, MatDialogModule, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { UserService } from '../services/user.service';
import { Observable }   from 'rxjs/Observable';
import { User } from '../models/user';
import { UserCreationComponent } from '../user-creation/user-creation.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public closedMenu: boolean;
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog
  ) { 
  }

  ngOnInit() {
  }

  notifyMenuStatus(ev) {
  	this.closedMenu = ev;
  }

  createUser() {
  	let dialogRef = this.dialog.open(UserCreationComponent, {
      width: '250px',
      position: {top: '15px', left: '50%'},
      hasBackdrop: false,
      data: {  }
    });
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}
