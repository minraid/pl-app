import { Injectable } from '@angular/core';
import { BaseApiService } from "../../../../shared/services/base-api.service";
import { Http } from "@angular/http";
import { IProduct } from "../products";

@Injectable()
export class ProductsService extends BaseApiService<IProduct> {
  constructor(http: Http) {
    super(http, 'products');
  }
}
