import { Component, Input } from '@angular/core';
import { User } from '../types';

@Component({
  selector: 'reactive-forms-user-component',
  templateUrl: './user.component.html'
})
export class UserComponent {

  @Input() user: User;

}
