import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ManageCustomersService } from './manage-customers.service';
import { of } from "rxjs";

import { NgxUiLoaderService } from 'ngx-ui-loader';

import {GridOptions} from "ag-grid-community";
import { ManageCustomersActionComponent } from './manage-customers-action/manage-customers-action.component';

@Component({
  selector: 'manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {

  constructor(private manageCustomersService: ManageCustomersService,private router:Router,
    private activatedRoute: ActivatedRoute,private ngxUiLoaderService: NgxUiLoaderService) { }

  public gridOptions: GridOptions;
  
  public  defaultColDef;
  
  ngOnInit() {

    this.defaultColDef = { 
      sortable: true,
      filter: true,
      resizable: true,
     };
    this.gridOptions = <GridOptions>{};
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
            field: "generalPractitioner",
            width:175
        },
        {
            headerName: "D.O.B",
            field: "dob",
            width:100
        },
        {
          headerName: "Mobile/Email",
          field: "mobile",
          width:100
        },
        {
            headerName: "Tokens Requested By GP",
            field: "tokens",
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
        {customerId: "1243", customerName: "ABC", generalPractitioner: "ABC", dob: "10-04-91", mobile: 999999990, tokens: 10},
        {customerId: "123", customerName: "ABC", generalPractitioner: "ABC", dob: "10-04-91", mobile: 999999990, tokens: 10},
        {customerId: "123", customerName: "ABC", generalPractitioner: "ABC", dob: "10-04-91", mobile: 999999990, tokens: 10},
    ]
  }

  navigate(url){
    this.router.navigateByUrl(url);
  }


}
