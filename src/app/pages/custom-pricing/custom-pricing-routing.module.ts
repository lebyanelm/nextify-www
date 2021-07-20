import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomPricingPage } from './custom-pricing.page';

const routes: Routes = [
  {
    path: '',
    component: CustomPricingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomPricingPageRoutingModule {}
