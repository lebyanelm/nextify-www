import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntergrationsPage } from './intergrations.page';

const routes: Routes = [
  {
    path: '',
    component: IntergrationsPage
  },
  {
    path: 'all',
    loadChildren: () => import('./all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'data-storage',
    loadChildren: () => import('./data-storage/data-storage.module').then( m => m.DataStoragePageModule)
  },
  {
    path: 'marketing-analytics',
    loadChildren: () => import('./marketing-analytics/marketing-analytics.module').then( m => m.MarketingAnalyticsPageModule)
  },
  {
    path: 'customer-loyalty-communications',
    loadChildren: () => import('./customer-loyalty-communications/customer-loyalty-communications.module').then( m => m.CustomerLoyaltyCommunicationsPageModule)
  },
  {
    path: 'mapping-location-services',
    loadChildren: () => import('./mapping-location-services/mapping-location-services.module').then( m => m.MappingLocationServicesPageModule)
  },
  {
    path: 'payments-transaction-services',
    loadChildren: () => import('./payments-transaction-services/payments-transaction-services.module').then( m => m.PaymentsTransactionServicesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntergrationsPageRoutingModule {}
