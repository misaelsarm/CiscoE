import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncapsulacionHdlcPage } from './encapsulacion-hdlc.page';

const routes: Routes = [
  {
    path: '',
    component: EncapsulacionHdlcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncapsulacionHdlcPageRoutingModule {}
