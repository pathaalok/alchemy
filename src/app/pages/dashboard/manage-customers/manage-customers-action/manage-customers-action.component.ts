import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from "rxjs";

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

import {ManageCustomersService } from '../manage-customers.service';

@Component({
  selector: 'manage-customers-action',
  templateUrl: './manage-customers-action.component.html',
  styleUrls: ['./manage-customers-action.component.scss']
})
export class ManageCustomersActionComponent {

  constructor(private manageCustomersService: ManageCustomersService,private router:Router,private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,private ngxUiLoaderService: NgxUiLoaderService) { }

    private params: any;

    agInit(params: any): void {
        this.params = params;
    }

  navigate(url){
    this.router.navigateByUrl(url);
  }


  callApi(status){

      let body ={
      "requestId": this.params.data.requestId,
      "requestStatus": status
      }

  this.ngxUiLoaderService.startLoader("master");
      this.manageCustomersService.updateStatusCustomer(body).subscribe(data =>{
      this.ngxUiLoaderService.stopLoader("master");
      if(status==='APPROVED'){
         this.toastr.success('Approved','', {
              closeButton: true
            });
      }else{
            this.toastr.error('Rejected','',{
          closeButton: true
        });
      }
      this.params.context.componentParent.getCustomers();

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
