import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocoloEigrpPage } from './protocolo-eigrp.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocoloEigrpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocoloEigrpPageRoutingModule {}
