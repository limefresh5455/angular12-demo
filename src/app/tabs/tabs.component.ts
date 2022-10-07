import { Component, OnInit } from '@angular/core';
import { UserService } from '../store/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  prefTabs: any;
  userInfo:any = [];

  constructor(private userService: UserService,
  	private route: ActivatedRoute) {
    this.prefTabs = [
      {
      	label: "User Info",
      	childTab: [
      		{
      			label: 'First',
		      	content: 'Content 1',
		      	childTab1: [{
		      		label: 'Tab 1',
		      		content: 'Tab Content 1',
		      	},{
		      		label: 'Tab 2',
		      		content: 'Tab Content 2',
		      	}]
      		},
      		{
	      		label: 'Second',
	      		content: 'Content 2',
	      		childTab1: [{
		      		label: 'Tab 3',
		      		content: 'Tab Content 3',
		      	},{
		      		label: 'Tab 4',
		      		content: 'Tab Content 4',
		      	}]
	      	},
	      	{
	      		label: 'Third',
	      		content: 'Content 3'
	      	}
      	]
      },
      {
      	label: "History",
      	childTab: [
      		{
      			label: 'History 1',
		      	content: 'History Content 1'
      		},
      		{
	      		label: 'History 2',
	      		content: 'History Content 2'
	      	},
	      	{
	      		label: 'History 3',
	      		content: 'History Content 3'
	      	}
      	]
      }
    ];
  }

  ngOnInit(): void {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.userService.getUserInfo(id).subscribe(resp => {
  		this.userInfo = resp;
    }, e => {
    });
  }

}
