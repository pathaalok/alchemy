import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NewCustomerComponent } from './new-customer/new-customer.component'
import { GpSearchComponent } from './gp-search/gp-search.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';

import { TokenTransactionsComponent } from './token-transactions/token-transactions.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: 'main',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'new-customer',
        pathMatch: 'full'
      },
      {
        path: 'new-customer',
        component: NewCustomerComponent,
      },
      {
        path: 'gp-search',
        component: GpSearchComponent,
      },
      {
        path: 'manage-customers',
        component: ManageCustomersComponent,
      },
      {
        path: 'token-transactions',
        component: TokenTransactionsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
