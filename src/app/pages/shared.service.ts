import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  	constructor() { }

	public userDetailsSubject= new Subject<any>();

	public userDetails= {};

	setUserDetails(value: any) {
	  this.userDetails = value;
	  this.userDetailsSubject.next(value);
  	}
  
}
