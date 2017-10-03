import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { UsersList } from './types';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'reactive-forms-users',
  template: `
    <reactive-forms-users-component
      [users]="users$ | async"
      (onUserEdited)="editUser($event)">
    </reactive-forms-users-component>`
})
export class UsersContainerComponent implements OnInit {

  users$: Observable<UsersList>;

  constructor(private userService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  editUser(userId: number) {
    this.router.navigate(['/user', userId]);
  }
}
