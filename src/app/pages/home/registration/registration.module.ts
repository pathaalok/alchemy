import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from './registration.service';
@NgModule({
  declarations: [RegistrationComponent],
  providers:[RegistrationService],
  imports: [
    CommonModule,FormsModule,HttpClientModule
  ]
})
export class RegistrationModule { }
