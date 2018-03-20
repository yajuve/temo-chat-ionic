import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Util} from "../../providers/util/util";
import {Friend, User} from "../../models/user";
import {HttpProvider} from "../../providers/http/http";

/**
 * Generated class for the ChatRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {

  public Util = Util;
  private friend: Friend = new Friend();
  private myProfile: User = new User();
  private message: string = '';

  constructor(public http:HttpProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.friend = this.navParams.get('friend');
    this.http.get('my-profile.json').subscribe((profile) => {
      this.myProfile = <User>profile;
    }, (err) => {
      console.error(err);
    });
  }

  doSend() {
    
  }

}
