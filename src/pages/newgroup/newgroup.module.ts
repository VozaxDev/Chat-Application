import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewgroupPage } from './newgroup';

@NgModule({
  declarations: [
    NewgroupPage,
  ],
  imports: [
    IonicPageModule.forChild(NewgroupPage),
  ],
  entryComponents:[NewgroupPage]
})
export class NewgroupPageModule {}
