import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProfilePage } from './my-profile';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MyProfilePage),
    TranslateModule.forChild()
  ],
})
export class MyProfilePageModule {}
