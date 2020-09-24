import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthModel } from 'src/app/_models/user.model';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
//assign variable for the user model and form group
  user: UserAuthModel = new UserAuthModel();
  signUpForm: FormGroup;
  public errorMsg = null;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(
    private _formBuilder: FormBuilder,
    private _AuthService : AuthService,
    private _Router: Router
  ) {}

  ngOnInit() {
    /****** Front end validation code start here */
    this.signUpForm = this._formBuilder.group({
      email_address: [
        this.user.email_address,
        [Validators.required, Validators.pattern(this.emailPattern)],
      ],
      password: [this.user.password, Validators.required],
    });
  }
  // this is for the vialidation and showing error massage
  get email_address(): any {
    return this.signUpForm.get("email_address");
  }
  get password(): any {
    return this.signUpForm.get("password");
  }

  /****** Front end validation code ends here */

  //function triggered on the click of submit button
  onSubmit() {
    console.log(this.signUpForm.value);
   this._AuthService.SignUp(this.email_address.value , this.password.value)
  }
}
