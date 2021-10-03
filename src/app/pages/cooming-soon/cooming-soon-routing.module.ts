import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoomingSoonPage } from './cooming-soon.page';

const routes: Routes = [
  {
    path: '',
    component: CoomingSoonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoomingSoonPageRoutingModule {}
