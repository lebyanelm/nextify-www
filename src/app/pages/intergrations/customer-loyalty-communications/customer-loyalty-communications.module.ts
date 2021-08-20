import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerLoyaltyCommunicationsPageRoutingModule } from './customer-loyalty-communications-routing.module';

import { CustomerLoyaltyCommunicationsPage } from './customer-loyalty-communications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CustomerLoyaltyCommunicationsPageRoutingModule
  ],
  declarations: [CustomerLoyaltyCommunicationsPage]
})
export class CustomerLoyaltyCommunicationsPageModule {}
