import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionamientoRedIpv6Page } from './direccionamiento-red-ipv6.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionamientoRedIpv6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionamientoRedIpv6PageRoutingModule {}
