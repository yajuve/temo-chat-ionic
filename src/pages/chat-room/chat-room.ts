import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Util} from "../../providers/util/util";
import {Friend, User} from "../../models/user";
import {HttpProvider} from "../../providers/http/http";
import {forkJoin} from 'rxjs/observable/forkJoin';

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
  private friend:Friend = new Friend();
  private myProfile:User = new User();
  private messages;
  private message:string = '';

  constructor(public http:HttpProvider, public navCtrl:NavController, public navParams:NavParams) {
  }

  ionViewDidLoad() {
    this.friend = this.navParams.get('friend');
    forkJoin(
      this.http.get('my-profile.json'),
      this.http.get('messages.json')
    )
      .subscribe(([profile, messages]) => {
        console.log(messages[this.friend.username]);
        this.myProfile = <User>profile;
        this.messages = messages;

      });
  }

  doSend() {

  }

}
