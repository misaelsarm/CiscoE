import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from '../../tabs/tabs.page';

import { Cisco1Page } from './cisco1.page';

const routes: Routes = [
  {
    path: '',
    component: Cisco1Page
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'saved',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../saved/saved.module').then(m => m.SavedPageModule)
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../user/user.module').then(m => m.UserPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'configuracion-basica-dispositivos',
    loadChildren: () => import('./temas/configuracion-basica-dispositivos/configuracion-basica-dispositivos.module').then( m => m.ConfiguracionBasicaDispositivosPageModule)
  },
  {
    path: 'direccionamiento-red-ipv6',
    loadChildren: () => import('./temas/direccionamiento-red-ipv6/direccionamiento-red-ipv6.module').then( m => m.DireccionamientoRedIpv6PageModule)
  },
  {
    path: 'direcciones-ipv4',
    loadChildren: () => import('./temas/direcciones-ipv4/direcciones-ipv4.module').then( m => m.DireccionesIpv4PageModule)
  },
  {
    path: 'historia-de-redes',
    loadChildren: () => import('./temas/historia-de-redes/historia-de-redes.module').then( m => m.HistoriaDeRedesPageModule)
  },
  {
    path: 'modelos-tcp-osi',
    loadChildren: () => import('./temas/modelos-tcp-osi/modelos-tcp-osi.module').then( m => m.ModelosTcpOsiPageModule)
  },
  {
    path: 'representaciones-de-red',
    loadChildren: () => import('./temas/representaciones-de-red/representaciones-de-red.module').then( m => m.RepresentacionesDeRedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cisco1PageRoutingModule {}
