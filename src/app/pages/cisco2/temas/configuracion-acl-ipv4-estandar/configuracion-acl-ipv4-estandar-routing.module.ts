import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionAclIpv4EstandarPage } from './configuracion-acl-ipv4-estandar.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionAclIpv4EstandarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionAclIpv4EstandarPageRoutingModule {}
