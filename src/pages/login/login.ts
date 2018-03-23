import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {HttpProvider} from "../../providers/http/http";
import {User} from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

/**
 * @author: KMR
 * @email: yajuve.25.dz@gmail.com
 */

export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account = {
    username: 'yajuve',
    fullname: 'Mohamed Raouf',
    email: 'yajuve.25.dz@gmail.com',
    password: 'demodemo'
  };

  // Our translated text strings
  private loginErrorString: string;
  private opt: string = 'signin';

  constructor(public http:HttpProvider, public userProvider: UserProvider, public menuCtrl: MenuController, public navCtrl: NavController,
    public translateService: TranslateService) {
    this.menuCtrl.enable(false);
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    this.http.get('my-profile.json').subscribe((profile) => {
      this.userProvider.user = <User>profile;
      this.navCtrl.setRoot('ListFriendsPage');
    }, (err) => {
      console.error(err);
    });

  }
}
