import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { BaseApiService } from "./base-api.service";
import { Order } from "../definitions/orders";

@Injectable()
export class OrdersService extends BaseApiService<Order> {

    constructor(http: Http) {
      super(http, 'orders')
    }

}
