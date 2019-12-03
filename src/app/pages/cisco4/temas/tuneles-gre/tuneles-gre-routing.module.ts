import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TunelesGrePage } from './tuneles-gre.page';

const routes: Routes = [
  {
    path: '',
    component: TunelesGrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TunelesGrePageRoutingModule {}
