import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from 'src/app/shared/user.service';
import { AlertComponent } from 'src/app/widget/alert/alert.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isSignupSuccess: any = false;
  isFormSubmitted: boolean = false;
  title = "Signup"
  private alertComponent: AlertComponent
  form: any = {
    id: '',
    email: '',
    password: ''
  };

  
  constructor(
    public _authService: AuthService,
    private fb: FormBuilder,
    private _userService: UserService
  ){
    this.alertComponent = new AlertComponent();
  }

  signupForm = this.fb.group({
    'id': new FormControl(''),
    'firstname': new FormControl('', [Validators.required, Validators.minLength(2)]),
    'lastname': new FormControl('', [Validators.required, Validators.minLength(2)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'phone': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8),]),
  });

  ngOnInit(): void {
  }

  submitForm() {
    this.isFormSubmitted = true;
    if (this.signupForm.valid) {
      let id = this._authService.generateId();
      this.form = {
        id: id,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
      }
      let adduserForm = {
        id: id,
        email: this.signupForm.value.email,
        firstname: this.signupForm.value.firstname,
        lasttname: this.signupForm.value.lastname,
        phone: this.signupForm.value.phone,
      }

      console.log(this.form);

      this._authService.onSignup(this.form).subscribe(
        (res: any) => {
          this._userService.AddUser(adduserForm).subscribe(
            (res) => { console.log(res) }
          );
          this.isSignupSuccess = true;
          this.alertComponent.openAlert(this.isSignupSuccess, this.title, "Please login to continue shoping");
          console.log(res);
        },
        (err: any) => {
          this.isSignupSuccess = false;

          console.log(err.error.message)
          this.alertComponent.openAlert(this.isSignupSuccess, this.title, err.error.message);
        }
      )
      this.signupForm.reset();
      this.isFormSubmitted = false;
    } else {
      setTimeout(() => {
        this.isFormSubmitted = false;
      }, 2000);
    }
  }

}
