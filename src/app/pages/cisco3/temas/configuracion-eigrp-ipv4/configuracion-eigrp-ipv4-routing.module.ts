import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionEigrpIpv4Page } from './configuracion-eigrp-ipv4.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionEigrpIpv4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionEigrpIpv4PageRoutingModule {}
