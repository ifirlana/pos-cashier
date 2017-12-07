import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LaraService} from "../service/laravel/lara.service";
import {SidebarModel} from "../service/laravel/sidebar.model";


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
    this.loadSidebar()
  }

  // load sidebar menu
  loadSidebar() {
    return this.laraService.getSidebar()
      .subscribe((response: SidebarModel) => {
        console.log(":response ", response);
        this.sidebars = response;
      });
  }

}
