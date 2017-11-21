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

  onSave(Auth: string): Observable {
    return Observable.create((observer) => {
      this.cookieService.set( this.AuthKey, Auth);
      this.cookieValue = this.cookieService.get(this.AuthKey);
      observer.next();
    });
  }

  getAuth(): string {
    return this.cookieValue;
  }
}
