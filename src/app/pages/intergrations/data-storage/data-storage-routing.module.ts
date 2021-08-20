import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataStoragePage } from './data-storage.page';

const routes: Routes = [
  {
    path: '',
    component: DataStoragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataStoragePageRoutingModule {}
