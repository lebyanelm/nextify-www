import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsTransactionServicesPageRoutingModule } from './payments-transaction-services-routing.module';

import { PaymentsTransactionServicesPage } from './payments-transaction-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    PaymentsTransactionServicesPageRoutingModule
  ],
  declarations: [PaymentsTransactionServicesPage]
})
export class PaymentsTransactionServicesPageModule {}
