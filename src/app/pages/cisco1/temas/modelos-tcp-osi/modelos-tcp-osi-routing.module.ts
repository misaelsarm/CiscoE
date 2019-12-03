import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelosTcpOsiPage } from './modelos-tcp-osi.page';

const routes: Routes = [
  {
    path: '',
    component: ModelosTcpOsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelosTcpOsiPageRoutingModule {}
