import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { IonContent, IonHeader, IonLabel, IonTitle, IonToolbar, IonItem, IonList, IonItemDivider, IonIcon, IonButton, IonMenuButton, IonButtons } from '@ionic/angular/standalone';
import { Util } from 'src/providers/util/util';
import { User } from 'src/models/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton,IonButton, IonList, IonItemDivider, IonIcon, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class MyProfilePage implements OnInit {

  public Util = Util;
  public profile: User = new User();
  public isLoading: boolean = true;
  public test = 'test';
  public form: FormGroup | undefined;

  constructor(private httpService: HttpService) { }

  ngOnInit() {

    this.httpService.getMyProfile().subscribe((profile) => {
      this.isLoading = false;
      this.profile = profile;
    });
  }

  doSubmit() {
    console.log('Submitted');
  }

}
