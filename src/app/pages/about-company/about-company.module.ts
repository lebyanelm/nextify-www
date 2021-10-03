import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutCompanyPageRoutingModule } from './about-company-routing.module';

import { AboutCompanyPage } from './about-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutCompanyPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AboutCompanyPage],
})
export class AboutCompanyPageModule {}
