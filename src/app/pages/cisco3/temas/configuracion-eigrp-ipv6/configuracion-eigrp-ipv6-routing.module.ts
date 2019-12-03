import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionEigrpIpv6Page } from './configuracion-eigrp-ipv6.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionEigrpIpv6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionEigrpIpv6PageRoutingModule {}
