import { Injectable } from '@angular/core';
import { BaseApiService } from "../../../../shared/services/base-api.service";
import { ICategory } from "../categories";
import { Http } from "@angular/http";

@Injectable()
export class CategoriesService extends BaseApiService<ICategory> {

    constructor(private http: Http) {
      super(http, 'categories')
    }

}
