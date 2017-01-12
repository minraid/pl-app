import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductsService {

  constructor(private http: Http) {
  }

  get(): Observable<any> {
    return this.http.get('/api/products')
      .map((r: Response) => r.json().data);
  }

  save(product): Observable<any> {
    return this.http.post('/api/products', product)
      .map((r: Response) => r.json().data);
  }

  delete(id): Observable<void> {
    return this.http.delete(`/api/products/${id}`)
      .map((r: Response) => r.json().data);
  }
}
