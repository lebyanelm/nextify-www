import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsTransactionServicesPage } from './payments-transaction-services.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsTransactionServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsTransactionServicesPageRoutingModule {}
