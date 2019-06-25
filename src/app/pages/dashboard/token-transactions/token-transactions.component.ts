import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenTransactionsService } from './token-transactions.service';
import { of } from "rxjs";

import { NgxUiLoaderService } from 'ngx-ui-loader';

import {GridOptions} from "ag-grid-community";
import { TokenTransactionsActionComponent } from './token-transactions-action/token-transactions-action.component';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'token-transactions',
  templateUrl: './token-transactions.component.html',
  styleUrls: ['./token-transactions.component.scss']
})
export class TokenTransactionsComponent implements OnInit {

  constructor(private tokenTransactionsService: TokenTransactionsService,private router:Router,
    private activatedRoute: ActivatedRoute,private ngxUiLoaderService: NgxUiLoaderService,private toastr: ToastrService) { }

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
            headerName: "Tokens Allocated",
            field: "tokensAllocated",
            width:100
        },
        {
          headerName: "Tokens Redeemed",
          field: "tokensRedeemed",
          width:100
        },
        {
            headerName: "Tokens Remaining",
            field: "tokensRemaining",
            width:150
        },
        {
          headerName: "Actions",
          field: "actions",
          width:175,
          cellRendererFramework:TokenTransactionsActionComponent
        }
    ];
    this.gridOptions.rowData = [
        {customerId: "1243", customerName: "ABC", generalPractitioner: "ABC", tokensAllocated: "10", tokensRedeemed: 1, tokensRemaining: 10},
        {customerId: "123", customerName: "ABC", generalPractitioner: "ABC", tokensAllocated: "10", tokensRedeemed: 2, tokensRemaining: 10},
        {customerId: "123", customerName: "ABC", generalPractitioner: "ABC", tokensAllocated: "10", tokensRedeemed: 3, tokensRemaining: 10},
    ]

    this.getTokenTransactions();
  } 

  getTokenTransactions(){
   this.ngxUiLoaderService.startLoader("master");
    this.tokenTransactionsService.getTokenTransactions().subscribe(data =>{
      this.ngxUiLoaderService.stopLoader("master");
      //this.gridOptions.rowData = data;
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
