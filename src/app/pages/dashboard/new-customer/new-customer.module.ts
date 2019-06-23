import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCustomerComponent } from './new-customer.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewCustomerService } from './new-customer.service';
@NgModule({
  declarations: [NewCustomerComponent],
  providers:[NewCustomerService],
  imports: [
    CommonModule,FormsModule,HttpClientModule
  ]
})
export class NewCustomerModule { }
