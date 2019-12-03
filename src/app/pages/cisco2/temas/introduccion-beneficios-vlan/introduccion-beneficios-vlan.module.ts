import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroduccionBeneficiosVlanPageRoutingModule } from './introduccion-beneficios-vlan-routing.module';

import { IntroduccionBeneficiosVlanPage } from './introduccion-beneficios-vlan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroduccionBeneficiosVlanPageRoutingModule
  ],
  declarations: [IntroduccionBeneficiosVlanPage]
})
export class IntroduccionBeneficiosVlanPageModule {}
