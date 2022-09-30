import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

export interface UsersData {
  name: string;
  id: number;
  contact: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1, name: 'Test', contact: 54654564},
  {id: 2, name: 'Rahul', contact: 3453453},
  {id: 3, name: 'James', contact: 56756756},
  {id: 4, name: 'John', contact: 867867876}
];
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  displayedColumns: string[] = ['id', 'name', 'contact', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: any;

  constructor(public dialog: MatDialog) {}

  openDialog(action:any,obj:any, type:any) {
    obj.action = action;
    obj.type = type;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'View'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj:any){
    this.dataSource.push({
      id:this.dataSource.length+1,
      name:row_obj.name,
      contact:row_obj.contact
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
}