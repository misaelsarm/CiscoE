import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasosConfiguracionSwitchPageRoutingModule } from './pasos-configuracion-switch-routing.module';

import { PasosConfiguracionSwitchPage } from './pasos-configuracion-switch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasosConfiguracionSwitchPageRoutingModule
  ],
  declarations: [PasosConfiguracionSwitchPage]
})
export class PasosConfiguracionSwitchPageModule {}
