import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketingAnalyticsPage } from './marketing-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: MarketingAnalyticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingAnalyticsPageRoutingModule {}
