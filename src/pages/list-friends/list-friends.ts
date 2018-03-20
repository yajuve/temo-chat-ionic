import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {Friend} from "../../models/user";
import {Util} from "../../providers/util/util";

/**
 * Generated class for the ListFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-friends',
  templateUrl: 'list-friends.html',
})
export class ListFriendsPage {

  public Util = Util;
  private friends: Friend[] = [];

  constructor(public http:HttpProvider, public navCtrl:NavController, public navParams:NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListFriendsPage');
    this.http.get('friends.json').subscribe((friends) => {
      console.log(friends);
      this.friends = <Friend[]>friends;
    }, (err) => {
      console.error(err);
    });
  }

  goToProfileFriend(friend: Friend) {
    this.navCtrl.push('ProfileFriendPage', {friend});
  }

  

}
