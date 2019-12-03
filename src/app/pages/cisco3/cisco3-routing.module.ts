import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cisco3Page } from './cisco3.page';

const routes: Routes = [
  {
    path: '',
    component: Cisco3Page
  },
  {
    path: 'configuracion-eigrp-ipv4',
    loadChildren: () => import('./temas/configuracion-eigrp-ipv4/configuracion-eigrp-ipv4.module').then( m => m.ConfiguracionEigrpIpv4PageModule)
  },
  {
    path: 'configuracion-eigrp-ipv6',
    loadChildren: () => import('./temas/configuracion-eigrp-ipv6/configuracion-eigrp-ipv6.module').then( m => m.ConfiguracionEigrpIpv6PageModule)
  },
  {
    path: 'configuracion-ospfv3',
    loadChildren: () => import('./temas/configuracion-ospfv3/configuracion-ospfv3.module').then( m => m.ConfiguracionOspfv3PageModule)
  },
  {
    path: 'implementacion-basica-ospfv2',
    loadChildren: () => import('./temas/implementacion-basica-ospfv2/implementacion-basica-ospfv2.module').then( m => m.ImplementacionBasicaOspfv2PageModule)
  },
  {
    path: 'protocolo-eigrp',
    loadChildren: () => import('./temas/protocolo-eigrp/protocolo-eigrp.module').then( m => m.ProtocoloEigrpPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cisco3PageRoutingModule {}
