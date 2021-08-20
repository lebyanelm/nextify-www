import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MappingLocationServicesPage } from './mapping-location-services.page';

const routes: Routes = [
  {
    path: '',
    component: MappingLocationServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MappingLocationServicesPageRoutingModule {}
