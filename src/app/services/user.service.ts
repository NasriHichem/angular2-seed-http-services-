import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    // Resolve HTTP using the constructor
     constructor (private http: Http) {}
	 //URL of rest api 
	 private url  = 'http://localhost:18080/SpringRest/persons'; 
     
	 users:User[];
  
  //get all users
  getUsers(): Observable<User[]> {
    return this.http.get(this.url).map((res:Response)=>res.json())
	.catch((error:any)=>Observable.throw(error.json().error||'server error'));
  }
  
  
}
