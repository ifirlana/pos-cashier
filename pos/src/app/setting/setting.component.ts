import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WpService } from '../service/wp/wp.service';
import { WpModel } from '../service/wp/wp.model';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SettingComponent implements OnInit {

  sidebar: WpModel[];

  constructor(private wp: WpService) { }

  ngOnInit() {
   this.loadWp()
  }

  loadWp() {
    this.wp.getSidebar()
      .(
        (isian) => {
          console.log("isian:", isian);
          this.sidebar = isian;
        });
    console.log("sidebar:", this.sidebar);
  }

}
