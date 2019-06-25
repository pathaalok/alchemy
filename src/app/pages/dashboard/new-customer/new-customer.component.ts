import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewCustomerService } from './new-customer.service';
import { of } from "rxjs";

import { NgxUiLoaderService } from 'ngx-ui-loader';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor(private newCustomerService: NewCustomerService,private router:Router,private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,private ngxUiLoaderService: NgxUiLoaderService) { }

  public registrationModel:any = {  }

  ngOnInit() {
    this.initialValues();
  }

  initialValues(){
    this.registrationModel={
      "gpId":"",
      "firstName":"",
      "lastName":"",
      "nhsId":"",
      "dob":"",
      "email":"",
      "assignTokens":"",
      "gender":"Male"
    }
  }

  navigate(url){
    this.router.navigateByUrl(url);
  }

  register(){
    this.ngxUiLoaderService.startLoader("master");
    this.newCustomerService.registration(this.registrationModel).subscribe(jsonStr =>{
      this.ngxUiLoaderService.stopLoader("master");
      this.toastr.success('Successfully Created','',{
        closeButton: true
      });
      this.initialValues();
    }, error => {
      this.handleError();
    });
  }

  private handleError() {
    this.ngxUiLoaderService.stopLoader("master");
	  this.toastr.error('Something Went Wrong.Please try again later','',{
      closeButton: true
    });
  }
}
