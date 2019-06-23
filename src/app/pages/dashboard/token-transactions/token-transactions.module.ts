import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenTransactionsComponent } from './token-transactions.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenTransactionsService } from './token-transactions.service';

import { InnerHeaderModule } from '../inner-header/inner-header.module';

import { AgGridModule } from 'ag-grid-angular';
import { TokenTransactionsActionComponent } from './token-transactions-action/token-transactions-action.component';

@NgModule({
  declarations: [TokenTransactionsComponent,TokenTransactionsActionComponent],
  providers:[TokenTransactionsService],
  imports: [
    CommonModule,FormsModule,HttpClientModule,InnerHeaderModule,AgGridModule.withComponents([TokenTransactionsActionComponent])
  ]
}) 
export class TokenTransactionsModule { }
