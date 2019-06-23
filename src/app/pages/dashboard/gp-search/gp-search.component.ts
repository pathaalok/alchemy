import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GpSearchService } from './gp-search.service';
import { of } from "rxjs";

import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'gp-search',
  templateUrl: './gp-search.component.html',
  styleUrls: ['./gp-search.component.scss']
})
export class GpSearchComponent implements OnInit {

  constructor(private gpSearchService: GpSearchService,private router:Router,
    private activatedRoute: ActivatedRoute,private ngxUiLoaderService: NgxUiLoaderService) { }

  
  ngOnInit() {
  }

  navigate(url){
    this.router.navigateByUrl(url);
  }


}
