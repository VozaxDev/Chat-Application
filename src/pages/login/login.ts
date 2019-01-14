import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { AuthProvider } from "../../providers/auth/auth";
import { usercreds } from "../../model/userLoogin";
import { Observable } from "rxjs/Observable";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  credentials = {} as usercreds;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authservice: AuthProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  signin() {
    this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code) {
        this.navCtrl.setRoot("TabsPage");
      } else {
        console.log(res);
      }
    });
  }

  loginWithGoogle() {
    this.authservice
      .signInWithGoogle()
      .catch(res => {
        error => console.log(error.message);
      })
      .then((res: any) => {
        // debugger;
        this.navCtrl.setRoot("TabsPage");
        console.log("data", res.user);
      });
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(function(error) {
    //   // Handle Errors here.
    //   alert(error.message);
    // });
  }

  passwordreset() {
    this.navCtrl.push("PasswordresetPage");
  }

  signup() {
    this.navCtrl.push("SignupPage");
  }
}
