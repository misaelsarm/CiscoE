import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CableDeFibraOpticaPage } from './cable-de-fibra-optica.page';

const routes: Routes = [
  {
    path: '',
    component: CableDeFibraOpticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CableDeFibraOpticaPageRoutingModule {}
