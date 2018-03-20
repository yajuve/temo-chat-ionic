import {Injectable} from '@angular/core';
import {User} from "../../models/user";

/*
 Generated class for the UserProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class UserProvider {

  private _user:User = new User();

  constructor() {
    console.log('Hello UserProvider Provider');
  }


  get user():User {
    return this._user;
  }

  set user(value:User) {
    this._user = value;
  }
}
