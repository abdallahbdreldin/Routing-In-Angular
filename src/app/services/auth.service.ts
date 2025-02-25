import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor() { }

  logIn(){
    this.loggedIn = true
  }

  logout(){
    this.loggedIn = false
  }

  isAuthenticated(){
    return this.loggedIn
  }
}
