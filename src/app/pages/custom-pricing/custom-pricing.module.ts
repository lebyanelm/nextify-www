import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomPricingPageRoutingModule } from './custom-pricing-routing.module';

import { CustomPricingPage } from './custom-pricing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CustomPricingPageRoutingModule
  ],
  declarations: [CustomPricingPage]
})
export class CustomPricingPageModule {}
