import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageMocks } from 'src/mocks/messageMocks';
import { Message } from 'src/models/message';
import { Friend, User } from 'src/models/user';
import { HttpService } from 'src/app/services/http.service';
import { Util } from 'src/providers/util/util';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonTextarea, IonButton, IonButtons, IonIcon, IonFooter, IonGrid, IonRow, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatRoomPage implements OnInit {

  public Util = Util;

  public myProfile: User = new User();

  public messages: Message[] = [];

  public username: string = '';

  public input: string = '';

  public friend: Friend | undefined = new Friend();

  @ViewChild(IonContent) content: IonContent | undefined;

  constructor(private route: ActivatedRoute, public msgMocks: MessageMocks, private httpService: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.messages = this.msgMocks.items;
      this.messages = this.msgMocks.getByUsername(params['username']);
      this.httpService.getFriend(this.username).subscribe((friend) => {
        this.friend = friend;
      });
      this.httpService.getMyProfile().subscribe((profile) => {
        this.myProfile = profile;
      });
    });
  }

  doSend() {

    if (this.input.trim().length > 0) {
      let message: Message = new Message();
      message.to = this.username;
      message.from = 'me';
      message.content = this.input;
      this.msgMocks.add(message);
      this.messages = this.msgMocks.getByUsername(this.username);
      // this.scrollToBottom();
      if (this.content)
        this.content.scrollToBottom(300);
      this.input = '';
    }
  }

}
