import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOptions, IonItemSliding, IonList, IonMenuButton, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Friend } from 'src/models/user';
import { Router } from '@angular/router';
import { Util } from 'src/providers/util/util';
import { HttpService } from '../../../services/http.service';


@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.page.html',
  styleUrls: ['./list-friends.page.scss'],
  standalone: true,

  imports: [IonButtons, IonMenuButton, IonText, IonIcon, IonItemOptions, IonAvatar, IonList, IonItemSliding, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListFriendsPage implements OnInit {

  public disabledMenu: boolean = false;
  public friends: Friend[] = [];
  public Util = Util;


  constructor(private router: Router, private httpService: HttpService) { }

  ionViewWillEnter() { }

  ngOnInit() {
    this.httpService.getFriends().subscribe({
      next: (friends) => { this.friends = <Friend[]>friends },
      error: (err) => { console.error(err) }
    });
  }


  goToFriendProfile(friend: Friend) {
    // sliding.close();
    // this.navCtrl.push('ProfileFriendPage', {friend});
    this.router.navigate(['/friend-profile', { username: friend.username }])
  }

  goToChatRoom(friend: Friend) {
    // this.navCtrl.push('ChatRoomPage', {friend});
    this.router.navigate(['/chat-room', { username: friend.username }])
  }

}
