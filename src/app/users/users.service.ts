import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User, UsersList } from './types';
import { environment } from '../../environments/environment';

@Injectable()
export class UsersService {

  constructor(private http: Http) {
  }

  public loadUser(userId: string): Observable<User> {
    return this.http.get(`http://${environment.api_url}/api/user/${userId}`)
      .map(this.extractUser);
  }

  public getUsers(): Observable<UsersList> {
    return this.http.get(`http://${environment.api_url}/api/users`)
      .map(this.extractUsers);
  }

  private extractUsers(res: Response): UsersList {
    return UsersList.from(res.json());
  }

  private extractUser(res: Response): User {
    return User.from(res.json());
  }
}


