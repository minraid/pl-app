import { Injectable } from '@angular/core';
import { BaseApiService } from "./base-api.service";
import { Category } from "../definitions/categories";
import { Http } from "@angular/http";

@Injectable()
export class CategoriesService extends BaseApiService<Category> {

    constructor(http: Http) {
      super(http, 'categories')
    }

}
