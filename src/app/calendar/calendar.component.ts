import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

export interface UsersData {
  name: string;
  id: number;
  calendar:string;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1, name: 'Test',calendar:"04-09-2022"},
  {id: 2, name: 'Rahul',calendar:"01-10-2022"},
  {id: 3, name: 'James',calendar:"02-10-2022"},
  {id: 4, name: 'John',calendar:"03-10-2022"}
];
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  displayedColumns: string[] = ['id', 'name', 'calendar', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: any;

  constructor(public dialog: MatDialog) {}

  openDialog(action:any,obj:any,type:any) {
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
      calendar:row_obj.calendar
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