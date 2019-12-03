import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImplementacionBasicaOspfv2Page } from './implementacion-basica-ospfv2.page';

const routes: Routes = [
  {
    path: '',
    component: ImplementacionBasicaOspfv2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImplementacionBasicaOspfv2PageRoutingModule {}
