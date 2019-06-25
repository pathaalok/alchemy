import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ManageCustomersService } from './manage-customers.service';
import { of } from "rxjs";

import { NgxUiLoaderService } from 'ngx-ui-loader';

import {GridOptions} from "ag-grid-community";
import { ManageCustomersActionComponent } from './manage-customers-action/manage-customers-action.component';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {

  constructor(private manageCustomersService: ManageCustomersService,private router:Router,
    private activatedRoute: ActivatedRoute,private ngxUiLoaderService: NgxUiLoaderService,private toastr: ToastrService) { }

  public gridOptions: GridOptions;
  
  public  defaultColDef;
  
  ngOnInit() {

    this.defaultColDef = { 
      sortable: true,
      filter: true,
      resizable: true
     }; 
    this.gridOptions = <GridOptions>{};
    this.gridOptions['context']= {
            componentParent: this
    };
    this.gridOptions.columnDefs = [
        {
            headerName: "Customer ID",
            field: "customerId",
            width:175
        },
        {
            headerName: "Customer Name",
            field: "customerName",
            width:175
        },
        {
            headerName: "General Practitioner",
            field: "gpName",
            width:175
        },
        {
            headerName: "D.O.B",
            field: "customerDOB",
            width:100
        },
        {
          headerName: "Mobile/Email",
          field: "email",
          width:100
        },
        {
            headerName: "Tokens Requested By GP",
            field: "allotedTokens",
            width:150
        },
        {
          headerName: "Actions",
          field: "actions",
          width:175,
          cellRendererFramework:ManageCustomersActionComponent
        }
    ];
    this.gridOptions.rowData = [
        {customerId: "1243", customerName: "ABC", gpName: "ABC", customerDOB: "10-04-91", email: 999999990, allotedTokens: 10},
        {customerId: "123", customerName: "ABC", gpName: "ABC", customerDOB: "10-04-91", email: 999999990, allotedTokens: 10},
        {customerId: "123", customerName: "ABC", gpName: "ABC", customerDOB: "10-04-91", email: 999999990, allotedTokens: 10},
    ];

    this.getCustomers();
  }

  public getCustomers(){
   this.ngxUiLoaderService.startLoader("master");
    this.manageCustomersService.getCustomers().subscribe(data =>{
      this.ngxUiLoaderService.stopLoader("master");
      //this.gridOptions.rowData = data.gpPlatformRequests;
    }, error => {
      this.handleError();
    });
  }

 
  navigate(url){
    this.router.navigateByUrl(url);
  }

private handleError() {
    this.ngxUiLoaderService.stopLoader("master");
    this.toastr.error('Something Went Wrong.Please try again later','',{
      closeButton: true
    });
  }

}
