import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as env from '../../../environments/environment';
import {Observable} from "rxjs/Observable";
import {StoreService} from "../cookies/store.service";
import {SidebarModel} from "./sidebar.model";
import {HttpObserve} from "@angular/common/http/src/client";
import {ChairsModel} from "./chairs.model";
import {ProductsModel} from "./products.model";

@Injectable()
export class LaraService {

  lara:string;
  oauth_token: string;
  sidebar: string;
  chairs:string;
  products:string;

  headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private store: StoreService,
  ) {
    // routing api
    this.lara = env.environment.lara_url;
    this.oauth_token = this.lara+"/oauth/token/";
    this.sidebar = this.lara + "/api/sidebar/";
    this.chairs = this.lara + "/api/chairs/";
    this.products = this.lara + "/api/products/";

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

  // chairs components service
  // return chairs
  getChairs(): Observable<any> {
    return this.http.get<ChairsModel>(this.chairs, {
      headers: this.loadHeader()
    })
  }

  // return single chair
  getChair(id: string): Observable<any> {
    return this.http.get<ChairsModel>(this.chairs+id, {
      headers: this.loadHeader()
    })
  }

  // create new
  postChair(data: object): Observable<any> {
    return this.http.post(this.chairs, data, {
      headers: this.loadHeader(),
    });
  }

  // update
  updateChair(data: object, id: string): Observable<any> {
    return this.http.patch(this.chairs+id, data, {
      headers: this.loadHeader(),
    })
  }

  // delete
  deleteChair(id: string): Observable<any> {
    return this.http.delete(this.chairs+id, {
      headers: this.loadHeader(),
    })
  }

  // products components service
  // return chairs
  getProducts(): Observable<any> {
    return this.http.get<ProductsModel>(this.products, {
      headers: this.loadHeader()
    })
  }

  // return single chair
  getProduct(id: string): Observable<any> {
    return this.http.get<ProductsModel>(this.products+id, {
      headers: this.loadHeader()
    })
  }

  // create new
  postProduct(data: object): Observable<any> {
    return this.http.post(this.products, data, {
      headers: this.loadHeader(),
    });
  }

  // update
  updateProduct(data: object, id: string): Observable<any> {
    return this.http.patch(this.products+id, data, {
      headers: this.loadHeader(),
    })
  }

  // delete
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.products+id, {
      headers: this.loadHeader(),
    })
  }
}
