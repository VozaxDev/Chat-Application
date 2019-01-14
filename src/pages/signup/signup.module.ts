import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { ProfilepicPageModule } from '../profilepic/profilepic.module';

@NgModule({
  declarations: [SignupPage],
  imports: [IonicPageModule.forChild(SignupPage), ProfilepicPageModule,],
 
  entryComponents: [SignupPage]
})
export class SignupPageModule {}
