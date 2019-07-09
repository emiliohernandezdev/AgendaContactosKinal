import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs'
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endpoint = "http://localhost:3000/v2/"
  httpOptions = ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  })
  constructor(private http: HttpClient) { }

  private extractData(res) {
    let body = res;
    return body || [] || {}
  }

  public Login(user) : Observable<any>{
    let params = JSON.stringify(user);
    return this.http.post(this.endpoint + 'login', params, this.httpOptions).pipe(map(this.extractData))
  }


}