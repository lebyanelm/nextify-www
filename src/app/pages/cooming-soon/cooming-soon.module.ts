import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoomingSoonPageRoutingModule } from './cooming-soon-routing.module';

import { CoomingSoonPage } from './cooming-soon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoomingSoonPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CoomingSoonPage],
})
export class CoomingSoonPageModule {}
