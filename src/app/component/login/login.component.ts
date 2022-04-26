import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenStorageService } from 'src/app/shared/token-storage.service';
import { UserService } from 'src/app/shared/user.service';
import { AlertComponent } from 'src/app/widget/alert/alert.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginSuccess: any = null;
  isFormSubmitted: boolean = false;
  title = "Login"
  private alertComponent: AlertComponent

  form: any = {
    'email': 'datta.probal@gmail.com',
    'password': '123456789',
  }
  constructor(public _authService: AuthService,
    private _router: Router,
    public _tokenStorage: TokenStorageService,private _userService:UserService) {
    this.alertComponent = new AlertComponent();
  }

  ngOnInit(): void {
  }

  onSubmit(loginForm: any) {
    this.isFormSubmitted = true;
    if (loginForm.valid) {

      this.form = {
        'email': loginForm.value.email,
        'password': loginForm.value.password,
      }
      this._authService.onLogin(this.form).subscribe(
        (res: any) => {
          this.isLoginSuccess = true;
          console.log(res);
          this._tokenStorage.saveToken(res.access_token);
          this._authService._isLogedin.next(true);
          this._userService.getUsers().subscribe(
            (res)=> {console.log(res)}
          );
          this.alertComponent.openAlert(this.isLoginSuccess, this.title, "You are ready for shoping");
          setTimeout(() => {
            this._router.navigate(['/home']);
          }, 1000);
        },
        (err: any) => {
          this.isLoginSuccess = false;
          this.alertComponent.openAlert(this.isLoginSuccess, this.title, err.error.message);
        },
      )
    } else {
      setTimeout(() => {
        this.isFormSubmitted = false;
      }, 2000);
    }
  }
}
