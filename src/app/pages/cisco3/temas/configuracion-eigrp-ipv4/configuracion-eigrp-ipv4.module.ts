import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionEigrpIpv4PageRoutingModule } from './configuracion-eigrp-ipv4-routing.module';

import { ConfiguracionEigrpIpv4Page } from './configuracion-eigrp-ipv4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionEigrpIpv4PageRoutingModule
  ],
  declarations: [ConfiguracionEigrpIpv4Page]
})
export class ConfiguracionEigrpIpv4PageModule {}
