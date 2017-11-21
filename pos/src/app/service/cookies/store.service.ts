import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class StoreService {

  cookieValue = 'UNKNOWN';
  AuthKey = "BASIC_AUTH";

  constructor(private cookieService: CookieService) {
    this.cookieValue = this.cookieService.get(this.AuthKey);
  }

  onSave(Auth: string): Observable<any> {
    return Observable.create((observer) => {
      this.cookieService.set( this.AuthKey, Auth);
      this.cookieValue = this.cookieService.get(this.AuthKey);
      observer.next(true);
    });
  }

  getAuth(): string {
    return "Basic "+this.cookieService.get(this.AuthKey);
  }

  destroyAll(): Observable<any> {
    return Observable.create((observer) => {
      this.cookieService.deleteAll();
      observer.next(true);
    })
  }
}
