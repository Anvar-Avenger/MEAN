import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";


@Injectable({ providedIn: 'root' })
export class RequestService {

  private host: string;

  constructor(private http: Http) {
    this.host = "http://127.0.0.1:3000"
  }

  signUp(user: any) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http.post(`${this.host}/hisob/yangi`, user, { headers: header })
      .pipe(map((res: any) => res.json()));
  }

  signIn(user: any) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http.post(`${this.host}/hisob/kirish`, user, { headers: header })
      .pipe(map((res: any) => res.json()));
  }
}
