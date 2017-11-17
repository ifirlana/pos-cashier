import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as env from '../../../environments/environment';


@Injectable()
export class WpService {

  protected firlana_com: string;

  Response: { body: object};

  constructor(private http: HttpClient) {
    this.firlana_com  = env.environment.wp_url+"/wp-json/wp/v2";
  }

  getSidebar(){
      return this.http.get(this.firlana_com+"/"+env.environment.wp_sidebar);
  }

}
