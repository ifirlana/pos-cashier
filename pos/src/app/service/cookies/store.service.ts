import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class StoreService {

  cookieValue = 'UNKNOWN';
  AuthKey = "BASIC_AUTH";
  AuthLaraKey = "TOKEN";

  constructor(private cookieService: CookieService) {
    this.cookieValue = this.cookieService.get(this.AuthKey);
  }

  // save basic auth
  onSave(Auth: string): Observable<any> {
    return Observable.create((observer) => {
      this.cookieService.set( this.AuthKey, Auth);
      this.cookieValue = this.cookieService.get(this.AuthKey);
      observer.next(true);
    });
  }

  // save "Bearer ..<token>" into cookies
  onLaraSave(Token: string): Observable<any> {
    return Observable.create((observer) => {
      this.cookieService.set( this.AuthLaraKey, Token);
      this.cookieValue = this.cookieService.get(this.AuthLaraKey);
      if (this.cookieValue == Token) {
        observer.next(true);
      } else {
        observer.error("Token not stored!");
      }
    })
  }

  // basic auth
  getAuth(): string {
    return "Basic "+this.cookieService.get(this.AuthKey);
  }

  // for token purposes
  getLaraAuth(): string {
    return this.cookieService.get(this.AuthLaraKey);
  }

  // destroy cookie
  destroyAll(): Observable<any> {
    return Observable.create((observer) => {
      this.cookieService.deleteAll();
      observer.next(true);
    })
  }
}
