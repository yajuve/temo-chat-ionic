import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonItemGroup, IonItemDivider, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { Friend } from 'src/models/user';
import { HttpService } from 'src/app/services/http.service';
import { Util } from 'src/providers/util/util';


@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.page.html',
  styleUrls: ['./friend-profile.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonIcon, IonItemGroup, IonItemDivider, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FriendProfilePage implements OnInit {

  public Util = Util;
  public profile: Friend | undefined = new Friend();

  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.httpService.getFriend(params['username']).subscribe((friend) => {
        this.profile = friend;
      });
    });
  }

  public goToChatRoom() {
    // this.navCtrl.push('ChatRoomPage', { friend: this.profile });
    this.router.navigate(['/chat-room', { username: this.profile?.username }]);
  }

}
