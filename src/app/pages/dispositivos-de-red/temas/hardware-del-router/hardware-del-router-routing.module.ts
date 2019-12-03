import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HardwareDelRouterPage } from './hardware-del-router.page';

const routes: Routes = [
  {
    path: '',
    component: HardwareDelRouterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardwareDelRouterPageRoutingModule {}
