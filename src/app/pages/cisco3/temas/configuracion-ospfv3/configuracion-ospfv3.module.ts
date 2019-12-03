import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionOspfv3PageRoutingModule } from './configuracion-ospfv3-routing.module';

import { ConfiguracionOspfv3Page } from './configuracion-ospfv3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionOspfv3PageRoutingModule
  ],
  declarations: [ConfiguracionOspfv3Page]
})
export class ConfiguracionOspfv3PageModule {}
