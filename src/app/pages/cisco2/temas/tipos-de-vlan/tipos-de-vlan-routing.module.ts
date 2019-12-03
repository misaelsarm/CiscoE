import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposDeVlanPage } from './tipos-de-vlan.page';

const routes: Routes = [
  {
    path: '',
    component: TiposDeVlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposDeVlanPageRoutingModule {}
