import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { of } from "rxjs";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {GridOptions} from "ag-grid-community";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router:Router,
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
      this.ngxUiLoaderService.stopLoader("master");
      this.navigate("dashboard");

    }, error => this.handleError<string>(error, "Network Error!"));
  }

  private handleError<T>(error: any, result?: T) {
    console.log("This is getting error:")
    console.log(error);
    return of(result as T);
}


}
