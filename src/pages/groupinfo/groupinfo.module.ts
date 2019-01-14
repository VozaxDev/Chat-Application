import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupinfoPage } from './groupinfo';

@NgModule({
  declarations: [
    GroupinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupinfoPage),
  ],
  entryComponents:[GroupinfoPage]
})
export class GroupinfoPageModule {}
