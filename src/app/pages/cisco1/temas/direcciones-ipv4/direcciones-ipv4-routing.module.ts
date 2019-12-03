import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionesIpv4Page } from './direcciones-ipv4.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionesIpv4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionesIpv4PageRoutingModule {}
