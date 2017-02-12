import { Injectable } from '@angular/core';
import { BaseApiService } from "../../../../shared/services/base-api.service";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { User } from "../../../../shared/definitions/users";
import { Router } from "@angular/router";

@Injectable()
export class UserService extends BaseApiService {
  private apiUrl: string = '/api/user';
  private user: User;

  constructor(http: Http, private Router: Router) {
    super(http, 'users');
  }

  get(update?): Observable<User> {
    if (this.user && !update) {
      return Observable.of(this.user)
    }
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json() as User)
      .catch(err => {
        if (err.status === 401) {
          this.Router.navigate(['/login']);
        }
        return Promise.reject(err.message || err);
      })
  }

  update(user): Observable<any> {
    return this.http.post(this.apiUrl, user)
      .map((res: Response) => res.json() as User)
      .catch(this.handleError)
  }

  logout() {
    return this.http.post('/auth/logout', {})
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

}
