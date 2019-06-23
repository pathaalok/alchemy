import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InnerHeaderComponent } from '../inner-header/inner-header.component';

@NgModule({
  declarations: [InnerHeaderComponent],
  exports:[InnerHeaderComponent],
  providers:[],
  imports: [
    CommonModule,FormsModule,HttpClientModule
  ]
})
export class InnerHeaderModule { }
