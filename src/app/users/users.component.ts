import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersList } from './types';

@Component({
  selector: 'reactive-forms-users-component',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  @Input() users: UsersList;
  @Output() onUserEdited = new EventEmitter();

  editUser($event: Event, id: Number) {
    $event.stopPropagation();
    this.onUserEdited.emit(id);
  }
}
