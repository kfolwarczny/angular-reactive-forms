import { Component, Input } from '@angular/core';
import { UsersList } from './types';

@Component({
  selector: 'reactive-forms-users-component',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  @Input() users: UsersList;

}
