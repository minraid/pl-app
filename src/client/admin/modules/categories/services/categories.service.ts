import { Injectable } from '@angular/core';
import { BaseApiService } from "../../../../shared/services/base-api.service";
import { Category } from "../categories";
import { Http } from "@angular/http";

@Injectable()
export class CategoriesService extends BaseApiService<Category> {

    constructor(http: Http) {
      super(http, 'categories')
    }

}
