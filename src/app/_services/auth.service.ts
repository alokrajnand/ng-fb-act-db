import { Injectable ,NgZone} from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { User } from '../_models/user.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: "root",
})
export class AuthService {
userData: any;  
students :any;
uid : String;
  constructor(
    private _Router: Router,
    public _AngularFirestore: AngularFirestore, // Inject Firestore service
    public _AngularFireAuth: AngularFireAuth, // Inject Firebase auth service
    public _NgZone: NgZone 
  ) {

  }

  // Returns true when user is looged in and email is verified
  isLoggedIn(): boolean {
    return !!localStorage.getItem("user");
  }

 // Sign up with email/password
  SignUp(email, password) {
    return this._AngularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /** Get the role updated in the role collection */
        this._AngularFirestore.collection('roles').add({
          "email":result.user.email,
          "role":'user'
        })
        /* Call the SendVerificaitonMail() function when new user sign up and returns promise */
        this.sendEmailVerification();
        console.log(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }



//route to dashboard

// Sign in with email/password
 SignIn(email, password) {
    return this._AngularFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user.emailVerified !== true) {
          this.sendEmailVerification();
          window.alert('Please validate your email address. Kindly check your inbox.');
        }else { 
          this._NgZone.run(() => {
               /** */
                this._AngularFirestore.collection("roles", res => res.where('email', '==', result.user.email ))
                  .snapshotChanges().pipe(map(list => {
                      return list.map(item => {
                          var role = item.payload.doc.data()['role'];  
                            localStorage.setItem('user', JSON.stringify(
                                          { 
                                            "uid":result.user.uid,
                                            "email":result.user.email,
                                            "emailVerified":result.user.emailVerified,
                                            "role":role,         
                                        }));
                          })
                      })).subscribe(data => {
                        this._Router.navigate(['pdashboard']);
                      });
               }     /***  */
        )};
      }).catch((error) => {
        window.alert(error.message)
      })
  }



// Send email verfificaiton when new user sign up
sendEmailVerification() {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(() => {
      this._Router.navigate(['verifyemailaddress']);
    }).catch(function(error) {
      // An error happened.
    });
}


  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this._AngularFirestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  getuser() { 
  var user = firebase.auth().currentUser; 
   this.userData = {  
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified
   }  
   return this.userData;  
 }  


  // Sign out 
  SignOut() {
    return this._AngularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this._Router.navigate(['home']);
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this._AngularFireAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }


} 


