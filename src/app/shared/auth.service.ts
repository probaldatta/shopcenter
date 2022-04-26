import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _url = 'http://localhost:9000'

  public _isLogedin = new BehaviorSubject<boolean>(false);
  isLogedin = this._isLogedin.asObservable();
  isLoginSuccess:boolean = false;
  users:any[] = [];
  
  
  constructor(private _httpClient: HttpClient, private _tokenStorage:TokenStorageService ) {
    const token = this._tokenStorage.getToken();
    this._isLogedin.next(!!token);
  }

  generateId(){
    return Math.random().toString(36).slice(2);
  }
  

  onLogin(loginData:any):Observable<any>{
    return this._httpClient.post(this._url + '/auth/login', loginData,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
  onSignup(signupData:any):Observable<any>{
    return this._httpClient.post(this._url +'/auth/register', signupData,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
  onSignOut(){
    this._tokenStorage.removeToken();
    this._isLogedin.next(false);
    console.log(this.isLogedin);
  }
}
