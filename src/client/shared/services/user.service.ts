import { Injectable } from '@angular/core';
import { BaseApiService } from "./base-api.service";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { User } from "../definitions/users";
import { Router } from "@angular/router";

@Injectable()
export class UserService extends BaseApiService<User> {
  private apiUrl: string = '/api/user';
  private user: User;

  constructor(http: Http) {
    super(http, 'users');
  }

  get(update?): Observable<User> {
    if (this.user && !update) {
      return Observable.of(this.user)
    }
    return this.http.get(this.apiUrl)
      .map((res: Response) => {
        this.user = res.json();
        return this.user;
      })
      .catch(err => {
        if (err.status === 401) {
          location.href = '/';
        }
        return Promise.reject(err.message || err);
      })
  }

  updateUser(user): Observable<any> {
    return this.http.post(this.apiUrl, user)
      .map((res: Response) => res.json() as User)
      .catch(this.handleError)
  }

  logout() {
    return this.http.post('/auth/logout', {})
      .map((res: Response) => {
        if (res.json()) {
          this.user = null;
          location.href = '/';
        }
      })
      .catch(this.handleError)
  }

}
