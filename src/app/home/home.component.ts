import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MailComponent } from '../mail/mail.component';
import { ContactComponent } from '../contact/contact.component';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(type: any) {
    if(type == "mail"){
      const dialogRef = this.dialog.open(MailComponent, {
        width: '50%',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }else if(type == "contact"){
      const dialogRef = this.dialog.open(ContactComponent, {
        width: '50%',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }else if(type == "calendar"){
      const dialogRef = this.dialog.open(CalendarComponent, {
        width: '50%',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

}
