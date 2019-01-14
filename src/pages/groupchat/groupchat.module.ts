import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupchatPage } from './groupchat';
// import { GroupbuddiesPageModule } from '../groupbuddies/groupbuddies.module';
import { GroupmembersPageModule } from '../groupmembers/groupmembers.module';
import { GroupinfoPageModule } from '../groupinfo/groupinfo.module';

@NgModule({
  declarations: [
    GroupchatPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupchatPage),
   
    GroupmembersPageModule,
    GroupinfoPageModule
  ],
  entryComponents:[
    GroupchatPage
  ]
})
export class GroupchatPageModule {}
