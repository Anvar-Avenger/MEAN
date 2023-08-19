import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {

  private static TOKEN = "TOKEN";
  private static USER = "USER";

  token: string | null = null;

  user: User | null = null;

  constructor() {
    let token = localStorage.getItem(AuthService.TOKEN);
    let user = localStorage.getItem(AuthService.USER);
    if (token) {
      this.token = token;
      this.user = JSON.parse(user!!);
    }
  }

  login(token: string, user: any) {
    this.token = token;
    this.user = user;
    
    localStorage.setItem(AuthService.TOKEN, token);
    localStorage.setItem(AuthService.USER, JSON.stringify(user));
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  isSessionActive() {
    return this.token != null || `${this.token}`.length > 5;
  }
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string
}