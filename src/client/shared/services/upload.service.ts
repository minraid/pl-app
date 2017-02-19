import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class UploadService {

    constructor(private http: Http) { }

    upload(file: File) {
      const fd = new FormData();
      fd.append('img', file);

      return this.http.post('/api/upload', fd)
        .map((res: Response) => res.text());
    }

}
