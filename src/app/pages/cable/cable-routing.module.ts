import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CablePage } from './cable.page';

const routes: Routes = [
  {
    path: '',
    component: CablePage
  },
  {
    path: 'cables',
    loadChildren: () => import('./temas/cables/cables.module').then( m => m.CablesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CablePageRoutingModule {}
