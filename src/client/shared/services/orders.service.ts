import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from "@angular/http";
import { BaseApiService } from "./base-api.service";
import { Order } from "../definitions/orders";
import { DatePipe } from "@angular/common";
import { Observable } from "rxjs";

@Injectable()
export class OrdersService extends BaseApiService<Order> {
  private dateFormatter = new DatePipe('en-US');

  constructor(http: Http) {
    super(http, 'orders');
    this.http = http;
  }

  search({from, to, sort, order}): Observable<any[]> {
    const params = {
      from: this.dateFormatter.transform(from, 'MM/dd/y'),
      to: this.dateFormatter.transform(to, 'MM/dd/y'),
      sort,
      order
    };
    const formatted = Object.keys(params)
      .filter(key => params[key])
      .map(key => `${key}=${params[key]}`)
      .join('&');

    const search = new URLSearchParams(formatted);
    return this.http.get('/api/orders', {search})
      .map((response: Response) => response.json() as Order)
      .catch(this.handleError)
  }
}
