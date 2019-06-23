import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from "rxjs";

import { NgxUiLoaderService } from 'ngx-ui-loader';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'token-transactions-action',
  templateUrl: './token-transactions-action.component.html',
  styleUrls: ['./token-transactions-action.component.scss']
})
export class TokenTransactionsActionComponent {

  constructor(private router:Router,private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,private ngxUiLoaderService: NgxUiLoaderService) { }

    private params: any;

    agInit(params: any): void {
        this.params = params;
    }

  navigate(url){
    this.router.navigateByUrl(url);
  }

  success(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

}
