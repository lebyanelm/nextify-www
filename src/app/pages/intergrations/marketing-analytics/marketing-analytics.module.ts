import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketingAnalyticsPageRoutingModule } from './marketing-analytics-routing.module';

import { MarketingAnalyticsPage } from './marketing-analytics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MarketingAnalyticsPageRoutingModule
  ],
  declarations: [MarketingAnalyticsPage]
})
export class MarketingAnalyticsPageModule {}
