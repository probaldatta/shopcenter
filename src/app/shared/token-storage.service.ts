import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  saveToken(token:string):void{
    this.removeToken();
    localStorage.setItem('Token',token);
  }
  getToken(){
    return localStorage.getItem('Token');
  }
  removeToken(){
    localStorage.removeItem('Token');
  }
}
