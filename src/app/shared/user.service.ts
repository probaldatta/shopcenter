import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _url = 'http://localhost:9000'
  constructor( private _http:HttpClient ) { }

  AddUser(user:any):Observable<any>{
    return this._http.post(this._url + '/products',user,{
      headers: new HttpHeaders({
        'Content-Type':'Application/json'
      })
    })
  }
  getUsers(){
    return this._http.get(this._url + '/products',{
      headers: new HttpHeaders({
        'Content-Type':'Application/json'
      })
    })
  }
}
