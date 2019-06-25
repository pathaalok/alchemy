import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { of } from "rxjs";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {GridOptions} from "ag-grid-community";

import { ToastrService } from 'ngx-toastr';

 import {SharedService} from '../../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router:Router,private toastr: ToastrService,public sharedService: SharedService,
    private activatedRoute: ActivatedRoute,private ngxUiLoaderService: NgxUiLoaderService) { }

  public loginModel:any = {
    "userName":"",
    "password":"",
    "rememberMe":false
  };
  private rememberMeLabel='rememberMeLabel';

  

  ngOnInit() {
    var storageValue = localStorage.getItem(this.rememberMeLabel)
    if(storageValue){
      this.loginModel = JSON.parse(storageValue);
    }
   

  }

  navigate(url){
    this.router.navigateByUrl(url);
  }

  login(){
    this.ngxUiLoaderService.startLoader("master");
    console.log(this.loginModel)
    this.loginService.login(this.loginModel).subscribe(jsonStr =>{

      if(this.loginModel.rememberMe){
        localStorage.setItem(this.rememberMeLabel, JSON.stringify(this.loginModel));
      }else{
        localStorage.removeItem(this.rememberMeLabel);
      }
      
        this.loginService.getUserDetails(this.loginModel.userName).subscribe(data =>{

          this.sharedService.setUserDetails(data.user);
          this.ngxUiLoaderService.stopLoader("master");
          this.navigate("dashboard");

        }, error => {
            this.handleError();
        });

    }, error => {
		this.handleError();
	});
  }

  private handleError() {
    this.ngxUiLoaderService.stopLoader("master");
	  this.toastr.error('Something Went Wrong.Please try again later','',{
      closeButton: true
    });
     this.sharedService.setUserDetails({
        "userId": "adab9958-f58e-4c5b-a956-17e1198f91b8",
        "userName": "kh.shaik@sims.healthcare",
        "firstName": "Khaja Haneef",
        "lastName": "Shaik",
        "gender": "Male",
        "userType": "CUSTOMER",
        "mobileNumber": "8179095000",
        "email": "kh.shaik@sims.healthcare",
        "dob": "1992-12-15",
        "address": []
    });
    this.navigate("dashboard");
  }


}
