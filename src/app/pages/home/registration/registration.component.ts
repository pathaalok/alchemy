import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from './registration.service';
import { of } from "rxjs";

import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService,private router:Router,
    private activatedRoute: ActivatedRoute,private ngxUiLoaderService: NgxUiLoaderService) { }

  public registrationModel:any = {
    "firstName":"",
    "lastName":"",
    "postcode":"",
    "dob":"",
    "doorNo":"",
    "address":"",
    "email":"",
    "password":"",
    "activities":""
  }

  ngOnInit() {
  }

  navigate(url){
    this.router.navigateByUrl(url);
  }

  register(){
    this.ngxUiLoaderService.startLoader("master");
    this.registrationService.registration(this.registrationModel).subscribe(jsonStr =>{
      this.ngxUiLoaderService.stopLoader("master");
      this.navigate("/dashboard");
    }, error => this.handleError<string>(error, "Network Error!"));
  }

  private handleError<T>(error: any, result?: T) {
    console.log("This is getting error:")
    console.log(error);
    return of(result as T);
}

}
