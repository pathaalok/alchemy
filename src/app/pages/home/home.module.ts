import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';

 import {SharedService} from '../shared.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginModule,
    RegistrationModule
  ],
  providers: [{provide: SharedService, useValue: (<any>window).sharedService}]
})
export class HomeModule { }
