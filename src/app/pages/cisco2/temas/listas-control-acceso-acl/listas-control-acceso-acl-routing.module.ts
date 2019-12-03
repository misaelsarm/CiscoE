import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasControlAccesoAclPage } from './listas-control-acceso-acl.page';

const routes: Routes = [
  {
    path: '',
    component: ListasControlAccesoAclPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasControlAccesoAclPageRoutingModule {}
