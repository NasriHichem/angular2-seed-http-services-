import { Component ,OnInit } from '@angular/core';
import {User} from './models/user';
import { Observable } from 'rxjs/Observable';
import {UserService} from './services/user.service';



@Component({
  selector: 'app',
  template: `<h1>List of users</h1>
  <ul class="users">
  <li *ngFor="let u of users">
   {{u.firstname}} {{u.lastname}}
  </li>
  </ul>`
})
export class AppComponent implements OnInit{

  users:User[];
  constructor(private userservice: UserService) {}
  
  ngOnInit(){
  
    this.loadUsers();
  }
  loadUsers(){
    this.userservice.getUsers().subscribe(users =>this.users=users,
	err =>{
	console.log(err);
	});
  
  }
  }
