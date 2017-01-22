import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

export abstract class BaseApiService<T> {
    private url: string = `/api/${this.instance}`;

    constructor(private http: Http, private instance: string) { }

    retrieve(): Observable<T[]> {
      return this.http.get(this.url)
        .map((response: Response) => response.json() as T[])
        .catch(this.handleError);
    }

    get(id: string): Observable<T> {
      return this.http.get(`${this.url}/${id}`)
        .map((response: Response) => response.json() as T)
        .catch(this.handleError);
    }

    save(item: T): Observable<T> {
      if (item['_id']) {
        return this.update(item);
      }
      return this.http.post(this.url, item)
        .map((response: Response) => response.json() as T)
        .catch(this.handleError);
    }

    remove(id: number): Observable<T> {
      return this.http.delete(`${this.url}/${id}`)
        .map(() => null)
        .catch(this.handleError);
    }

    private update(item: T): Observable<T> {
      return this.http.put(`${this.url}/${item['_id']}`, item)
        .map((response: Response) => response.json() as T)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> { // TODO: create support class with static handleError method
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}
