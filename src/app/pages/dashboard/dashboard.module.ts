import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewCustomerModule } from './new-customer/new-customer.module';
import { GpSearchModule } from './gp-search/gp-search.module';
import { ManageCustomersModule } from './manage-customers/manage-customers.module';
import { TokenTransactionsModule } from './token-transactions/token-transactions.module';

@NgModule({
  declarations: [DashboardComponent,HeaderComponent,FooterComponent,SidebarComponent],
  imports: [
    CommonModule,
    NewCustomerModule,
    GpSearchModule,
    ManageCustomersModule,
    TokenTransactionsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
