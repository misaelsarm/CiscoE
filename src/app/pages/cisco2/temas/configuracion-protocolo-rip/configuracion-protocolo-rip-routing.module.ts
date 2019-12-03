import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionProtocoloRipPage } from './configuracion-protocolo-rip.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionProtocoloRipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionProtocoloRipPageRoutingModule {}
