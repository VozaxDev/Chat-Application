import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuddychatPage } from './buddychat';
import { IOSFilePicker } from "@ionic-native/file-picker";

@NgModule({
  declarations: [
    BuddychatPage,
  ],
  imports: [
    IonicPageModule.forChild(BuddychatPage),
  ],
  entryComponents:[BuddychatPage],
  providers:[IOSFilePicker]
})
export class BuddychatPageModule {}
