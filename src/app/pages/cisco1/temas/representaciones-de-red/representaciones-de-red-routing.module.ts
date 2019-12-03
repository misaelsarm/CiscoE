import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepresentacionesDeRedPage } from './representaciones-de-red.page';

const routes: Routes = [
  {
    path: '',
    component: RepresentacionesDeRedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepresentacionesDeRedPageRoutingModule {}
