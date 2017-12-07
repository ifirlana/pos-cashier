import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as env from '../../../environments/environment';
import {Observable} from "rxjs/Observable";
import {StoreService} from "../cookies/store.service";
import {SidebarModel} from "./sidebar.model";
import {HttpObserve} from "@angular/common/http/src/client";

@Injectable()
export class LaraService {

  lara:string;
  oauth_token: string;
  sidebar: string;

  headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private store: StoreService,
  ) {
    // routing api
    this.lara = env.environment.lara_url;
    this.oauth_token = this.lara+"/oauth/token/";
    this.sidebar = this.lara + "/api/sidebar/";

  }

  createToken(username: string, password: string, client_id = 2, client_secret = "p7uJZ9D5C57RmeBneJ56zHPN60rSskl3LHjVy6Ed", grant_type = "password", ): Observable<any> {
    return this.http.post(this.oauth_token, {
      client_id: client_id,
      client_secret: client_secret,
      grant_type: grant_type,
      username: username,
      password: password,
    });
  }

  // set headers
  loadHeader():HttpHeaders {
    let httpHeaders = new HttpHeaders();
    let auth = this.store.getLaraAuth();
    this.headers = httpHeaders.append('Authorization', auth);
    return this.headers;
  }

  // return navbar
  getSidebar(): Observable<any> {

    return this.http.get<SidebarModel>(this.sidebar, {
      headers: this.loadHeader()
    })
  }
}
