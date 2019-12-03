import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionAclIpv4EstandarPageRoutingModule } from './configuracion-acl-ipv4-estandar-routing.module';

import { ConfiguracionAclIpv4EstandarPage } from './configuracion-acl-ipv4-estandar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionAclIpv4EstandarPageRoutingModule
  ],
  declarations: [ConfiguracionAclIpv4EstandarPage]
})
export class ConfiguracionAclIpv4EstandarPageModule {}
