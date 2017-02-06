import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class ReportsService {

    constructor(private http: Http) { }

    get(params: any): Observable<any> { // TODO: create paramsChange params & reports interfaces
      const formatted = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
      const search = new URLSearchParams(formatted);
      return this.http.get('/api/orders', {search})
        .map((response: Response) => response.json() as any)
        .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
