import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionBasicaSwitchPage } from './configuracion-basica-switch.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionBasicaSwitchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionBasicaSwitchPageRoutingModule {}
