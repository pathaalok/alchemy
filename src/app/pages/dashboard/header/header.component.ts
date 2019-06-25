import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

 import {SharedService} from '../../shared.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','../dashboard.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,public sharedService: SharedService,
    private activatedRoute: ActivatedRoute) { }


public userDetails:any="wer";
  subscription: Subscription;

  ngOnInit() {
   
this.subscription = this.sharedService.userDetailsSubject.subscribe(
      (userDetails) => {
       this.userDetails = userDetails;
      });
   this.userDetails = this.sharedService.userDetails;
  }

  navigate(url){

    this.router.navigateByUrl(url);
  }



}
