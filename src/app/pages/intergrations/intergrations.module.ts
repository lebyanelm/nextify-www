import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntergrationsPageRoutingModule } from './intergrations-routing.module';

import { IntergrationsPage } from './intergrations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IntergrationsPageRoutingModule
  ],
  declarations: [IntergrationsPage]
})
export class IntergrationsPageModule {}
