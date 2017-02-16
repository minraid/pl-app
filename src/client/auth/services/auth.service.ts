import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class AuthService {
  private authUrl = '/auth';
  private url = {
    signUp: `${this.authUrl}/signup`,
    signIn: `${this.authUrl}/login`,
    checkNick: `${this.authUrl}/checknick`,
    forgot: `${this.authUrl}/forgot`,
  };

  constructor(private http: Http) {
  }

  signIn(user) {
    return this.http.post(this.url.signIn, user)
      .map(res => res.json())
      .catch(this.handleError)
  }

  signUp(user) {
    return this.http.post(this.url.signUp, user)
      .map(res => res.json())
      .catch(this.handleError)
  }

  checkNick(nickname) {
    return this.http.post(this.url.checkNick, {nickname})
      .map(res => res.json())
      .catch(this.handleError)
  }

  forgot(email) {
    return this.http.post(this.url.forgot, {email})
      .map(res => res.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
