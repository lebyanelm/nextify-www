import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpoweredCitiesPage } from './empowered-cities.page';

const routes: Routes = [
  {
    path: '',
    component: EmpoweredCitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpoweredCitiesPageRoutingModule {}
