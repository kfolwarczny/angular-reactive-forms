import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address, User } from '../types';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-forms-user-component',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  userForm: FormGroup;

  @Input() user: User;
  @Output() onFormSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      age: new FormControl(),
      email: new FormControl(),
      city: new FormControl(),
      country: new FormControl()
    });
  }

  submitForm({value}: { value: UserFormIFace }) {
    const user: User = new User(this.user.id, value.name, value.surname, value.age, value.email, new Address(value.city, value.country));
    this.onFormSubmit.emit(user);
  }
}

interface UserFormIFace {
  name: String;
  surname: String;
  age: String;
  email: String;
  city: String;
  country: String;
}
