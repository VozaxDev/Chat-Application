import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { SignupPageModule } from '../signup/signup.module';
import { PasswordresetPageModule } from '../passwordreset/passwordreset.module';
import { ProfilePageModule } from '../profile/profile.module';
import { HomePage } from '../home/home';
import { ChatsPageModule } from '../chats/chats.module';
import { GroupsPageModule } from '../groups/groups.module';

@NgModule({
  declarations: [LoginPage, HomePage],
  imports: [
    IonicPageModule.forChild(LoginPage),
    PasswordresetPageModule,
    ProfilePageModule,
    ChatsPageModule,
    GroupsPageModule
  ],
  entryComponents: [LoginPage]
})
export class LoginPageModule {}