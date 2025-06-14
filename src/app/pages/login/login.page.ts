import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonItem, IonIcon, IonButton, IonSegmentView, IonSegmentContent, IonSegment, IonSegmentButton, IonLabel, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  public opt: string = 'signin';

  public account = {
    username: 'yajuve',
    fullname: 'Mohamed Raouf',
    email: 'yajuve.25.dz@gmail.com',
    password: 'demodemo'
  };

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ionViewWillEnter() {

  }

  ngOnInit() { }


  doLogin() {
    this.router.navigate(['/list-friends']);
  }

}
