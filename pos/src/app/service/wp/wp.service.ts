import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as env from '../../../environments/environment';
import {Observable} from "rxjs/Observable";
import { StoreService } from "../cookies/store.service";


@Injectable()
export class WpService {

  protected firlana_com: string;
  wp = {
    wp_sidebar: "sidebar",
    wp_chairs: "chairs",
  };

  Response: { body: object};
  httpHeaders = new HttpHeaders()
    .set('Authorization', this.store.getAuth());

  constructor(private http: HttpClient, private store: StoreService) {
    this.firlana_com  = env.environment.wp_url;
  }

  getSidebar(): Observable<any>{
      return this.http.get(this.firlana_com+"/"+this.wp.wp_sidebar);
  }

  getChairs(): Observable<any>{
    return this.http.get(this.firlana_com+"/"+this.wp.wp_chairs+"?status=draft", {
      headers: this.httpHeaders,
    });
  }

  getChair(id: string): Observable<any>{
    return this.http.get(this.firlana_com+"/"+this.wp.wp_chairs+"/"+id, {
      headers: this.httpHeaders,
    });
  }


  // create data
  postChair(data: object): Observable<any> {
    return this.http.post(this.firlana_com+"/"+this.wp.wp_chairs, data, {
      headers: this.httpHeaders,
    });
  }

  // update data
  updateChair(data: object, id: string): Observable<any> {
    return this.http.post(this.firlana_com+"/"+this.wp.wp_chairs+"/"+id, data, {
      headers: this.httpHeaders,
    })
  }

  // delete data
  deleteChair(id: string): Observable<any> {
    return this.http.delete(this.firlana_com+"/"+this.wp.wp_chairs+"/"+id, {
      headers: this.httpHeaders,
    });
  }

}
