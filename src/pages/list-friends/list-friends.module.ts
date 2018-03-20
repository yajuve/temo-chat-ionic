import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListFriendsPage } from './list-friends';

@NgModule({
  declarations: [
    ListFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListFriendsPage),
  ],
})
export class ListFriendsPageModule {}
