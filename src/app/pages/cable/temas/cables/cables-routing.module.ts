import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CablesPage } from './cables.page';

const routes: Routes = [
  {
    path: '',
    component: CablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CablesPageRoutingModule {}
