import { Injectable } from '@angular/core';
import { BaseApiService } from "../../../../shared/services/base-api.service";
import { Http } from "@angular/http";
import { User } from "../../../../shared/definitions/users";

@Injectable()
export class UsersService extends BaseApiService<User> {

  constructor(http: Http) {
    super(http, 'users');
  }

}
