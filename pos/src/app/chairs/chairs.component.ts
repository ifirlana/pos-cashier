import {Component, Inject, OnInit, ViewEncapsulation, SecurityContext} from '@angular/core';
import {WpModel} from "../service/wp/wp.model";
import {WpService} from "../service/wp/wp.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {StoreService} from "../service/cookies/store.service";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-chairs',
  templateUrl: './chairs.component.html',
  styleUrls: ['./chairs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChairsComponent implements OnInit {

  chairs: WpModel[];
  message = false;

  constructor(
    private wp: WpService,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {
    this.wp.getChairs()
      .subscribe((chairs) => {
        console.log(":wp ", chairs);
        this.chairs = chairs;
      });
  }

  openDialog(this_var: string): void {
    this.message = true;
    this.wp.getChair(this_var)
      .subscribe((data) => {
        let dialogRef = this.dialog.open(ChairsComponentDialog,
          {
            data: data
          });

        dialogRef.afterOpen()
          .subscribe(() => {
            this.message = false;
          });
        dialogRef.afterClosed()
          .subscribe(result => {
            console.log('The dialog was closed');
          });
      });
  }

  openAddDialog(): void {
    let dialogRef = this.dialog.open(ChairsComponentAddDialog,
      {
        data: {}
      });

    dialogRef.afterClosed()
      .subscribe((result: boolean) => {
        console.log('The dialog was closed ', result);
        if (result === true) {
          this.router.navigate(["blank"], {queryParams: {redirect:"dashboard/chairs"}})
        }
      });
  }
}

@Component({
  selector: 'app-chairs-dialog',
  templateUrl: 'form/dialog.html',
  styleUrls: ['form/dialog.css'],
})
export class ChairsComponentDialog {

  chair: WpModel;
  rendered: any;

  constructor(
    public dialogRef: MatDialogRef<ChairsComponentDialog>,
    private _sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(":data ",data);
    this.chair = data;
    this.chair.content.rendered = this._sanitizer.sanitize(SecurityContext.HTML, this.chair.content.rendered);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

// Add form dialog
@Component({
  selector: 'app-chairs-dialog-add',
  templateUrl: 'form/dialog-insert.html',
  styleUrls: ['form/dialog.css'],
})
export class ChairsComponentAddDialog {

  title = "";
  content = "";
  message: string;

  constructor(
    public dialogRef: MatDialogRef<ChairsComponentAddDialog>,
    private wp: WpService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(":data ",data);

  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  Save():void {
    this.message = "Please wait...";
    this.wp.postChair({title: this.title, content: this.content})
      .subscribe((result) => {
        console.log(":result", result);
        this.message = "DONE!";
        this.dialogRef.close(true);
    })
  }
}
