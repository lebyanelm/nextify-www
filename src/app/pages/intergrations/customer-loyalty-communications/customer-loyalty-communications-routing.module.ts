import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerLoyaltyCommunicationsPage } from './customer-loyalty-communications.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerLoyaltyCommunicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerLoyaltyCommunicationsPageRoutingModule {}
