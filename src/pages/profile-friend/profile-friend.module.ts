import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileFriendPage } from './profile-friend';

@NgModule({
  declarations: [
    ProfileFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileFriendPage),
  ],
})
export class ProfileFriendPageModule {}
