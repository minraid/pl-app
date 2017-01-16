import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

export abstract class BaseApiService<T> {
    private url: string = `/api/${this.instance}`;

    constructor(private http: Http, private instance: string) { }

    get(id?: string): Observable<T[]>| Observable<T> {
      if (id) {
        return this.http.get(`${this.url}/${id}`)
          .map((response: Response) => response.json().data as T)
          .catch(this.handleError);
      }
      return this.http.get(this.url)
        .map((response: Response) => response.json().data as T[])
        .catch(this.handleError);
    }

    save(item: T): Observable<T> {
      return this.http.post(this.url, item)
        .map(() => item)
        .catch(this.handleError);
    }

    remove(id: string): Observable<T> {
      return this.http.delete(`${this.url}/${id}`)
        .map(() => null)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}
