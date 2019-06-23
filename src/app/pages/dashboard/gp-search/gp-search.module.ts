import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpSearchComponent } from './gp-search.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GpSearchService } from './gp-search.service';
@NgModule({
  declarations: [GpSearchComponent],
  providers:[GpSearchService],
  imports: [
    CommonModule,FormsModule,HttpClientModule
  ]
})
export class GpSearchModule { }
