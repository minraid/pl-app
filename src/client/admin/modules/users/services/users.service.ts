import { Injectable } from '@angular/core';
import { BaseApiService } from "../../../../shared/services/base-api.service";
import { Http } from "@angular/http";
import { IUser } from "../users";

@Injectable()
export class UsersService extends BaseApiService<IUser> {

  constructor(http: Http) {
    super(http, 'users');
  }

}
