import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-redirect-blank',
  templateUrl: './redirect-blank.component.html',
  styleUrls: ['./redirect-blank.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RedirectBlankComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.router.navigate([queryParams.redirect])
    });
  }

}
