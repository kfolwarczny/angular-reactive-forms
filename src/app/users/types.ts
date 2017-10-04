export class UsersList {
  static from(jsonArray: Array<Object>): UsersList {
    return new UsersList(jsonArray.map((jsonObj: User) => User.from(jsonObj)));
  }

  constructor(readonly users: User[]) {
  }
}

export class User {
  static from(json: any): User {
    return new User(
      json['id'],
      json['name'],
      json['surname'],
      json['age'],
      json['email'],
      Address.from(json['address'][0])
    );
  }

  constructor(public id: number,
              public name: String,
              public surname: String,
              public age: String,
              public email: String,
              public address: Address) {
  }
}

export class Address {
  static from(json: any): Address {
    return new Address(
      json['city'],
      json['country']
    );
  }

  constructor(public city: String,
              public country: String) {
  }
}
