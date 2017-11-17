import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WpService } from '../service/wp/wp.service';
import { WpModel } from '../service/wp/wp.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SettingComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }



}
