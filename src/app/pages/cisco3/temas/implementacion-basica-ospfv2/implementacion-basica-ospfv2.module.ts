import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImplementacionBasicaOspfv2PageRoutingModule } from './implementacion-basica-ospfv2-routing.module';

import { ImplementacionBasicaOspfv2Page } from './implementacion-basica-ospfv2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImplementacionBasicaOspfv2PageRoutingModule
  ],
  declarations: [ImplementacionBasicaOspfv2Page]
})
export class ImplementacionBasicaOspfv2PageModule {}
