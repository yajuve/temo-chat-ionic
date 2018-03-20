import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProfilePage } from './my-profile';

@NgModule({
  declarations: [
    MyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MyProfilePage),
  ],
})
export class MyProfilePageModule {}
