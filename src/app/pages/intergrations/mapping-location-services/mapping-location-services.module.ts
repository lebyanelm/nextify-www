import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MappingLocationServicesPageRoutingModule } from './mapping-location-services-routing.module';

import { MappingLocationServicesPage } from './mapping-location-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    MappingLocationServicesPageRoutingModule
  ],
  declarations: [MappingLocationServicesPage]
})
export class MappingLocationServicesPageModule {}
