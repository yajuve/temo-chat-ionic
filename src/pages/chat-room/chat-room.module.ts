import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatRoomPage } from './chat-room';

@NgModule({
  declarations: [
    ChatRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatRoomPage),
  ],
})
export class ChatRoomPageModule {}
