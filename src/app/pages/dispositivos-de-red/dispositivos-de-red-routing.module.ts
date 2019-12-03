import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispositivosDeRedPage } from './dispositivos-de-red.page';

const routes: Routes = [
  {
    path: '',
    component: DispositivosDeRedPage
  },
  {
    path: 'hardware-del-router',
    loadChildren: () => import('./temas/hardware-del-router/hardware-del-router.module').then( m => m.HardwareDelRouterPageModule)
  },
  {
    path: 'hardware-del-switch',
    loadChildren: () => import('./temas/hardware-del-switch/hardware-del-switch.module').then( m => m.HardwareDelSwitchPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivosDeRedPageRoutingModule {}
