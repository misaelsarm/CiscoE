import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionProtocoloRipPageRoutingModule } from './configuracion-protocolo-rip-routing.module';

import { ConfiguracionProtocoloRipPage } from './configuracion-protocolo-rip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionProtocoloRipPageRoutingModule
  ],
  declarations: [ConfiguracionProtocoloRipPage]
})
export class ConfiguracionProtocoloRipPageModule {}
