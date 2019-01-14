import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds } from '../../model/userLoogin';
import GoogleAuthProvider = firebase.auth.AuthProvider;
import * as firebase from "firebase/app";


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {
  constructor(public afireauth: AngularFireAuth) {}

  /*
      For logging in a particular user. Called from the login.ts file.
    
  */

  login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
          resolve(true);
        })
        .catch(err => {
          alert(err);
        });
    });

    return promise;
  }

  signInWithGoogle() {
    console.log("Sign in with google");
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  private oauthSignIn(provider: GoogleAuthProvider) {
    if (!(<any>window).cordova) {
      console.log(provider);
      return this.afireauth.auth.signInWithPopup(provider);
    } else {
      return this.afireauth.auth.signInWithRedirect(provider).then(() => {
        return this.afireauth.auth
          .getRedirectResult()
          .then((result: any) => {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            console.log(token, user);
            // resolve(true);
          })
          .catch(function(error) {
            // Handle Errors here.
            alert(error.message);
          });
      });
    }
  }
}