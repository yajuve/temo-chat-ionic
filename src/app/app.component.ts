
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, heart, logIn, personAdd, person, send, people, peopleOutline, peopleSharp, personOutline, personSharp, checkmark, informationCircle, lockOpen, lockClosed, logOut, logOutSharp, logOutOutline, chatbox } from 'ionicons/icons';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonLabel, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public menuDisabled: boolean = true;
  public appPages = [
    { title: 'My friends', url: '/list-friends', icon: 'people' },
    { title: 'My profile', url: '/my-profile', icon: 'person' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];
  constructor(private router: Router) {
    addIcons({ chatbox, logOutSharp, logOutOutline, informationCircle, lockClosed, checkmark, personOutline, personSharp, peopleOutline, peopleSharp, send, person, logIn, personAdd, heart, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      if (e.url === '/login') {
        this.menuDisabled = true;
      } else {
        this.menuDisabled = false;
      }
    });
  }
}
