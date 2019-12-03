import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionEigrpIpv6PageRoutingModule } from './configuracion-eigrp-ipv6-routing.module';

import { ConfiguracionEigrpIpv6Page } from './configuracion-eigrp-ipv6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionEigrpIpv6PageRoutingModule
  ],
  declarations: [ConfiguracionEigrpIpv6Page]
})
export class ConfiguracionEigrpIpv6PageModule {}
