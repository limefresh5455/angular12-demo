import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  contact: string;
  name: string;
  id: number;
}


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  action:string;
  type:string;
  userdata:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    this.userdata = {...data};
    this.action = this.userdata.action;
    this.type = this.userdata.type;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.userdata});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}