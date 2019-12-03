import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HardwareDelSwitchPage } from './hardware-del-switch.page';

const routes: Routes = [
  {
    path: '',
    component: HardwareDelSwitchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardwareDelSwitchPageRoutingModule {}
