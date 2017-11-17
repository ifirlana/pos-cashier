import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit, DoCheck {

  constructor(private router: Router) { }

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
    setTimeout(() =>
      {
        // this.router.navigate(['/']);
        window.location.href = "/";
      },
      3000);
  }
}
