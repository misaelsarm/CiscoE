import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cisco4Page } from './cisco4.page';

const routes: Routes = [
  {
    path: '',
    component: Cisco4Page
  },
  {
    path: 'encapsulacion-hdlc',
    loadChildren: () => import('./temas/encapsulacion-hdlc/encapsulacion-hdlc.module').then( m => m.EncapsulacionHdlcPageModule)
  },
  {
    path: 'protocolo-punto-a-punto',
    loadChildren: () => import('./temas/protocolo-punto-a-punto/protocolo-punto-a-punto.module').then( m => m.ProtocoloPuntoAPuntoPageModule)
  },
  {
    path: 'tuneles-gre',
    loadChildren: () => import('./temas/tuneles-gre/tuneles-gre.module').then( m => m.TunelesGrePageModule)
  },
  {
    path: 'vpn',
    loadChildren: () => import('./temas/vpn/vpn.module').then( m => m.VpnPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cisco4PageRoutingModule {}
