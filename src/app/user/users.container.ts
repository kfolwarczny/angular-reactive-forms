import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { UsersList } from './types';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'reactive-forms-users',
  template: `
    <reactive-forms-users-component [users]="users$ | async">
    </reactive-forms-users-component>`
})
export class UserContainerComponent implements OnInit {

  users$: Observable<UsersList>;

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

}
