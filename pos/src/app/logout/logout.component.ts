import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {StoreService} from "../service/cookies/store.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit, DoCheck {

  constructor(private router: Router, private store: StoreService) { }

  ngOnInit() {
    console.log(":ngOnInit")
  }

  ngDoCheck() {
    console.log(":ngDoCheck");
  }

  // ngAfterContentInit() {
  //   console.log(":ngAfterContentInit")
  // }
  //
  // ngAfterContentChecked() {
  //   console.log(":ngAfterContentChecked")
  // }
  //
  // ngAfterViewInit() {
  //   console.log(":ngAfterViewInit")
  // }

  ngAfterViewChecked() {
    console.log(":ngAfterViewChecked");
    this.store.destroyAll().subscribe(() => {
      setTimeout(() =>
        {
          // this.router.navigate(['/']);
          window.location.href = "/";
        },
        2000);
    });
  }
}
