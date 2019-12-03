import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriaDeRedesPage } from './historia-de-redes.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriaDeRedesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriaDeRedesPageRoutingModule {}
