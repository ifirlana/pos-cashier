import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import {WpModel} from "./wp.model";

@Injectable()
export class WpService {

  protected firlana_com = "https://firlana.com/wp-json/wp/v2/posts";

  Response: { body: object};

  constructor(private http: HttpClient) {}

  getSidebar(){
      this.http
        .get("https://firlana.com/wp-json/wp/v2/posts")
        .subscribe((resp:Response) => {
        console.log("resp:", resp.body);
        return resp.body;
      });
  }

}
