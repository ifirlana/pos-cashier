import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CommonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// Confirm dialog box
@Component({
  selector: 'app-common-confirm',
  templateUrl: './confirm/box.html',
  styleUrls: ['./common.component.css'],
})
export class CommonComponentConfirmDialog {

  message: string;

  constructor(
    public dialogRef: MatDialogRef<CommonComponentConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(":confirm ",data);

  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  yes(): void {
    this.dialogRef.close(true);
  }

  no(): void {
    this.dialogRef.close(false);
  }
}

