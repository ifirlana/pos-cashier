import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as env from '../../../environments/environment';
import {Observable} from "rxjs/Observable";

@Injectable()
export class LaraService {

  lara:string;
  lara_oauth_token: string;
  httpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.lara = env.environment.lara_url;
    this.lara_oauth_token = this.lara+"/oauth/token/";
  }

  createToken(username: string, password: string, client_id = 2, client_secret = "p7uJZ9D5C57RmeBneJ56zHPN60rSskl3LHjVy6Ed", grant_type = "password", ): Observable<any> {
    return this.http.post(this.lara_oauth_token, {
      client_id: client_id,
      client_secret: client_secret,
      grant_type: grant_type,
      username: username,
      password: password,
    }, {
      headers: this.httpHeaders,
    });
  }
}
