import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss','../dashboard.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
  
  }

  navigate(url){
    this.router.navigateByUrl(url);
  }

}
