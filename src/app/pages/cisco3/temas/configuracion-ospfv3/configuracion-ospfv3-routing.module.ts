import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionOspfv3Page } from './configuracion-ospfv3.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionOspfv3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionOspfv3PageRoutingModule {}
