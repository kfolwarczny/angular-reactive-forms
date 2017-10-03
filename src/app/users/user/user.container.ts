import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../types';
import { UsersService } from '../users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'reactive-forms-user',
  template: `
    <reactive-forms-user-component
      [user]="user$ | async"
      (onFormSubmit)="formSubmitted($event)">
    </reactive-forms-user-component>`
})
export class UserContainerComponent implements OnInit {

  user$: Observable<User>;

  constructor(private _activatedRoute: ActivatedRoute,
              private userService: UsersService) {
  }

  ngOnInit(): void {
    this.user$ = this._activatedRoute.paramMap
      .switchMap((params: ParamMap) =>
        this.userService.loadUser(params.get('id')));
  }

  formSubmitted(updatedUser: User) {
    console.log('User have been updated');
    this.logUser(updatedUser);
  }

  logUser(user: User) {
    console.log(`User[name=${user.name}, surname=${user.surname}, age=${user.age}, email=${user.email}, city=${user.address.city}, country=${user.address.country}]`);
  }
}
