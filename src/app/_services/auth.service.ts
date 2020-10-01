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
user_email :String;
user_role : String;
uid : String;
  constructor(
    private _Router: Router,
    public _AngularFirestore: AngularFirestore, // Inject Firestore service
    public _AngularFireAuth: AngularFireAuth, // Inject Firebase auth service
    public _NgZone: NgZone 
  ) {}

  // Returns true when user is looged in and email is verified
  isLoggedIn(): boolean { 
  return !! localStorage.getItem('user_uid');
    
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
                          if (role == 'user') {
                              window.alert('please talk to admin for your role')
                          } else                       
                            localStorage.setItem('user_uid', result.user.tenantId);
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


  getuser() { 
  var user = firebase.auth().currentUser; 
   this.userData = {  
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified
   }  
   console.log(this.userData)
   return this.userData;  
 }  


  // Sign out 
  SignOut() {
    return this._AngularFireAuth.signOut().then(() => {
      localStorage.clear();
      this._Router.navigate(['']);
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


