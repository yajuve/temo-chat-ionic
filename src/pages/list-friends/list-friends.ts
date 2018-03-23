import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
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

/**
 * @author: KMR
 * @email: yajuve.25.dz@gmail.com
 */

export class ListFriendsPage {

  public Util = Util;
  private friends: Friend[] = [];

  constructor(public menuCtrl: MenuController, public http:HttpProvider, public navCtrl:NavController, public navParams:NavParams) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    this.http.get('friends.json').subscribe((friends) => {
      this.friends = <Friend[]>friends;
    }, (err) => {
      console.error(err);
    });
  }

  goToProfileFriend(sliding, friend: Friend) {
    sliding.close();
    this.navCtrl.push('ProfileFriendPage', {friend});
  }

  goToChatRoom(friend: Friend) {
    this.navCtrl.push('ChatRoomPage', {friend});
  }



}
