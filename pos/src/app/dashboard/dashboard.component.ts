import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WpService } from '../service/wp/wp.service';
import { WpModel } from '../service/wp/wp.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  sidebar: WpModel[];

  constructor(private wp: WpService) { }

  ngOnInit() {
    this.loadWp()
  }

  // load sidebar menu
  loadWp() {
    this.wp.getSidebar()
      .subscribe(
        (isian: any) => {
          console.log("wp:", isian);
          this.sidebar = isian;
        });
  }

}
