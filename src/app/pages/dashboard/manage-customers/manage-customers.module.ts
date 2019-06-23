import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCustomersComponent } from './manage-customers.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ManageCustomersService } from './manage-customers.service';

import { InnerHeaderModule } from '../inner-header/inner-header.module';

import { AgGridModule } from 'ag-grid-angular';
import { ManageCustomersActionComponent } from './manage-customers-action/manage-customers-action.component';
 
@NgModule({
  declarations: [ManageCustomersComponent,ManageCustomersActionComponent],
  providers:[ManageCustomersService],
  imports: [
    CommonModule,FormsModule,HttpClientModule,InnerHeaderModule, AgGridModule.withComponents([ManageCustomersActionComponent])
  ]
})
export class ManageCustomersModule { }
