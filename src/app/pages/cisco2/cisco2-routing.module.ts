import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cisco2Page } from './cisco2.page';

const routes: Routes = [
  {
    path: '',
    component: Cisco2Page
  },
  {
    path: 'configuracion-acl-ipv4-estandar',
    loadChildren: () => import('./temas/configuracion-acl-ipv4-estandar/configuracion-acl-ipv4-estandar.module').then( m => m.ConfiguracionAclIpv4EstandarPageModule)
  },
  {
    path: 'configuracion-basica-switch',
    loadChildren: () => import('./temas/configuracion-basica-switch/configuracion-basica-switch.module').then( m => m.ConfiguracionBasicaSwitchPageModule)
  },
  {
    path: 'configuracion-protocolo-rip',
    loadChildren: () => import('./temas/configuracion-protocolo-rip/configuracion-protocolo-rip.module').then( m => m.ConfiguracionProtocoloRipPageModule)
  },
  {
    path: 'introduccion-beneficios-vlan',
    loadChildren: () => import('./temas/introduccion-beneficios-vlan/introduccion-beneficios-vlan.module').then( m => m.IntroduccionBeneficiosVlanPageModule)
  },
  {
    path: 'listas-control-acceso-acl',
    loadChildren: () => import('./temas/listas-control-acceso-acl/listas-control-acceso-acl.module').then( m => m.ListasControlAccesoAclPageModule)
  },
  {
    path: 'pasos-configuracion-switch',
    loadChildren: () => import('./temas/pasos-configuracion-switch/pasos-configuracion-switch.module').then( m => m.PasosConfiguracionSwitchPageModule)
  },
  {
    path: 'tipos-de-vlan',
    loadChildren: () => import('./temas/tipos-de-vlan/tipos-de-vlan.module').then( m => m.TiposDeVlanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cisco2PageRoutingModule {}
