import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StoreService } from '../service/cookies/store.service';
import {Route, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponentDialog);

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log('The dialog was closed');
      });
  }


}


@Component({
  selector: 'app-login-dialog',
  templateUrl: 'form/dialog.html',
  styleUrls: ['form/dialog.css'],
})
export class LoginComponentDialog {

  username: string;
  password: string;

  constructor(
    public dialogRef: MatDialogRef<LoginComponentDialog>,
    private store: StoreService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  OK(): void {
      this.store.onSave(btoa(this.username+":"+this.password))
      .subscribe(() => {
        console.log(":store:Success!");
        this.dialogRef.close();
        this.router.navigate(["dashboard"], {skipLocationChange: true})
      })
  }

}
