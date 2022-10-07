import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as userModel from '../store/user/user.model';
import { Subscription } from 'rxjs';
import * as userSelector from '../store/user/user.selector';
import * as userAction from '../store/user/user.action';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  getuserList!:Subscription;
  userList:userModel.User[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website', 'action'];
  constructor(private store:Store<userModel.UserState>) { }
  dataSource: any;
  ngOnInit() {
    this.store.dispatch(new userAction.GetUserListAction(""));  // empty string for now
    this.subscriptionInit();
  }

  subscriptionInit(){
    this.getuserList = this.store.select(userSelector.getUserList).subscribe(
      (users:userModel.User[])=>{
        if(users){
          setTimeout(() => {
            this.userList =  users;
            this.dataSource = new MatTableDataSource(this.userList);
            this.dataSource.filterPredicate = (data: userModel.User, filtersJson: string) => {
              const matchFilter = [];
              const filters = JSON.parse(filtersJson);

              filters.forEach((filter) => {
                const val = data[filter.id] === null ? '' : data[filter.id];
                matchFilter.push(
                  val.toLowerCase().includes(filter.value.toLowerCase())
                );
              });
              return matchFilter.every(Boolean);
            };
          },2000);
        }
      }
    )
  }

  applyFilter(event: Event) {
    const tableFilters = [];
    const filterValue = (event.target as HTMLInputElement).value;
    tableFilters.push({
      id: 'email',
      value: filterValue.trim().toLowerCase()
    });
    this.dataSource.filter = JSON.stringify(tableFilters);
  }

}
