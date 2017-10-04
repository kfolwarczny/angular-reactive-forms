import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address, User } from '../types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { get } from 'lodash';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'reactive-forms-user-component',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  readonly = false;

  @Input() initUser?: Observable<User>;
  @Output() onFormSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [{
        disabled: this.readonly
      }, [Validators.required, Validators.minLength(4)]],
      surname: [{
        disabled: this.readonly
      }, [Validators.required, Validators.minLength(6)]],
      age: [{
        disabled: this.readonly
      }],
      email: [{
        disabled: this.readonly
      }, [Validators.required, Validators.email]],
      city: [{disabled: !this.readonly}],
      country: [{disabled: !this.readonly}],
    });

    this.initUser.subscribe(user => {
      this.user = user;

      this.userForm.get('name').setValue(user.name);
      this.userForm.get('surname').setValue(user.surname);
      this.userForm.get('age').setValue(user.age);
      this.userForm.get('email').setValue(user.email);
      this.userForm.get('city').setValue(user.address.city);
      this.userForm.get('country').setValue(user.address.country);
    });
  }

  submitForm({value}: { value: UserFormIFace }) {
    if (this.userForm.valid) {
      const user: User = new User(this.user.id, value.name, value.surname, value.age, value.email, new Address(value.city, value.country));
      this.onFormSubmit.emit(user);
    } else {
      console.log('Form is not valid.');
    }
  }

  get name() {
    return this.userForm.get('name');
  }

  get surname() {
    return this.userForm.get('surname');
  }

  get email() {
    return this.userForm.get('email');
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
