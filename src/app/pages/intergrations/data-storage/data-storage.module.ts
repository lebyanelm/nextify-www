import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataStoragePageRoutingModule } from './data-storage-routing.module';

import { DataStoragePage } from './data-storage.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DataStoragePageRoutingModule
  ],
  declarations: [DataStoragePage]
})
export class DataStoragePageModule {}
