import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LaraService} from "../service/laravel/lara.service";
import {SidebarModel} from "../service/laravel/sidebar.model";
import 'rxjs/add/operator/retry';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  sidebars: SidebarModel;

  constructor(
    private laraService : LaraService,
  ) { }

  ngOnInit() {
    this.loadSidebar();
  }

  // load sidebar menu
  loadSidebar() {
    return this.laraService.getSidebar()
      .retry(1)
      .subscribe((response: SidebarModel) => {
        console.log(":response ", response);
        this.sidebars = response;
      }, (response: Response) => {
        console.error(":err ", response);
      });
  }

}
