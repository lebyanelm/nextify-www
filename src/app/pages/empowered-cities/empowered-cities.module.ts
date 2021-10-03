import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpoweredCitiesPageRoutingModule } from './empowered-cities-routing.module';

import { EmpoweredCitiesPage } from './empowered-cities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpoweredCitiesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EmpoweredCitiesPage]
})
export class EmpoweredCitiesPageModule {}
