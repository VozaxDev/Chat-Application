import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupsPage } from './groups';
import { NewgroupPageModule } from '../newgroup/newgroup.module';
import { GroupchatPageModule } from '../groupchat/groupchat.module';
import { GroupbuddiesPageModule } from '../groupbuddies/groupbuddies.module';

@NgModule({
  declarations: [
    GroupsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupsPage),
    NewgroupPageModule,
    GroupchatPageModule,
    GroupbuddiesPageModule
  ],
  entryComponents:[GroupsPage]
})
export class GroupsPageModule {}
