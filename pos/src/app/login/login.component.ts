import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StoreService } from '../service/cookies/store.service';
import {Route, Router} from "@angular/router";
import {LaraService} from "../service/laravel/lara.service";
import {TokenModel} from "../service/laravel/token.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  message:string;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.message = "";
    let dialogRef = this.dialog.open(LoginComponentDialog);

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        if (result === true) {
          this.router.navigate(["blank"], {queryParams: {redirect:"dashboard"}});
          this.message = "Something wrong! try again";
        }
      });
  }

  openDialogLaravel(): void {
    this.message = "";
    let dialogRef = this.dialog.open(LoginDialogComponentDialog);

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        if (result === true) {
          this.router.navigate(["blank"], {queryParams: {redirect:"dashboard"}});
        } else if (result === false) {
          this.message = "Something wrong! try again";
        }
      });
  };


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
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  OK(): void {
      this.store.onSave(btoa(this.username+":"+this.password))
      .subscribe(() => {
        console.log(":store:Success!");
        this.dialogRef.close(true);
      }, (response: Response) => {
        console.log(":err");
        console.log(response);
        this.dialogRef.close(false);
      });
  }

}

@Component({
  selector: 'app-login-dialog-custom',
  templateUrl: 'form/dialog.html',
  styleUrls: ['form/dialog.css'],
})
export class LoginDialogComponentDialog {

  username: string;
  password: string;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private laraService: LaraService,
    private store: StoreService,

  ) {
    this.title = "Laravel login";
    this.username = "test@gmail.com";
    this.password = "password";
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  OK(): void {
    this.laraService.createToken(this.username, this.password)
      .subscribe((responseToken: TokenModel) => {
        console.log(":token");
        console.log(responseToken);
          this.store.onLaraSave(responseToken.token_type+" "+responseToken.access_token)
            .subscribe(() => {
              this.dialogRef.close(true)
            });
      }, (response: Response) => {
        console.log(":err");
        console.log(response);
        window.alert(JSON.stringify(response));
        this.dialogRef.close(false);
      })
  }

}
