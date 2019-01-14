import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatsPage } from './chats';
import { BuddiesPageModule } from '../buddies/buddies.module';
import { BuddychatPageModule } from '../buddychat/buddychat.module';
import { ChatProvider } from '../../providers/chat/chat';

@NgModule({
  declarations: [
    ChatsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatsPage),
    BuddiesPageModule,
    BuddychatPageModule
  ],
  entryComponents:[ChatsPage],
  // providers:[ChatProvider]
})
export class ChatsPageModule {}
