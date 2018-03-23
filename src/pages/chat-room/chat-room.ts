import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Util} from "../../providers/util/util";
import {Friend, User} from "../../models/user";
import {HttpProvider} from "../../providers/http/http";
import {forkJoin} from 'rxjs/observable/forkJoin';
import {MessageMocks} from "../../mocks/messageMocks";
import {Message} from "../../models/message";
import { Content } from 'ionic-angular';

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

/**
 * @author: KMR
 * @email: yajuve.25.dz@gmail.com
 */

export class ChatRoomPage {

  @ViewChild(Content) content: Content;
  public Util = Util;
  private friend:Friend = new Friend();
  private myProfile:User = new User();
  private messages;
  private input: string = '';
  private isLoading: boolean = true;

  constructor(public msgMocks:MessageMocks, public http:HttpProvider, public navCtrl:NavController, public navParams:NavParams) {

  }

  ionViewDidLoad() {
    this.isLoading = true;
    this.messages = this.msgMocks.items;
    this.friend = this.navParams.get('friend');
    forkJoin(
      this.http.get('my-profile.json')
    ).subscribe(([profile]) => {
      this.isLoading = false;
      this.myProfile = <User>profile;
    });
  }

  ionViewWillEnter(): void {
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    });
  }


  doSend() {
    if(this.input.length > 0) {
      let message: Message = new Message();
      message.to = this.friend.username;
      message.from = 'me';
      message.content = this.input;
      this.msgMocks.add(message);
      this.scrollToBottom();
      this.input = '';
    }
  }

}
