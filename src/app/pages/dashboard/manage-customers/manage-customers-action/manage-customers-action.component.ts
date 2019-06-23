import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from "rxjs";

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'manage-customers-action',
  templateUrl: './manage-customers-action.component.html',
  styleUrls: ['./manage-customers-action.component.scss']
})
export class ManageCustomersActionComponent {

  constructor(private router:Router,private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,private ngxUiLoaderService: NgxUiLoaderService) { }

    private params: any;

    agInit(params: any): void {
        this.params = params;
    }

  navigate(url){
    this.router.navigateByUrl(url);
  }

  success(){
    this.toastr.success('Approved','', {
      closeButton: true
    });
  }

  cancel(){
    
    this.toastr.error('Rejected','',{
      closeButton: true
    });
  }

}
