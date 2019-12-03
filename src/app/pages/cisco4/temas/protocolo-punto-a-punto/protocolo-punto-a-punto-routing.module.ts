import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocoloPuntoAPuntoPage } from './protocolo-punto-a-punto.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocoloPuntoAPuntoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocoloPuntoAPuntoPageRoutingModule {}
