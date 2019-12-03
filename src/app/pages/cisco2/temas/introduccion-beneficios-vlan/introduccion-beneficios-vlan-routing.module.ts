import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroduccionBeneficiosVlanPage } from './introduccion-beneficios-vlan.page';

const routes: Routes = [
  {
    path: '',
    component: IntroduccionBeneficiosVlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroduccionBeneficiosVlanPageRoutingModule {}
