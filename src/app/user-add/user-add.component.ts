import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as userModel from '../store/user/user.model';
import { UserService } from '../store/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
  	private userService: UserService,
  	private router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          username: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', [Validators.required]],
          website: ['', [Validators.required]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
  	this.submitted = true;
  	// stop here if form is invalid
  	if (this.registerForm.invalid) {
    	return;
  	}

    this.userService.insert(this.registerForm.value).subscribe(resp => {
       this.router.navigateByUrl('/users');
    }, e => {
       this.router.navigateByUrl('/usersadd');
    });
  }
}
