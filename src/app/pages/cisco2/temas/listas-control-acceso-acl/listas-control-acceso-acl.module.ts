import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasControlAccesoAclPageRoutingModule } from './listas-control-acceso-acl-routing.module';

import { ListasControlAccesoAclPage } from './listas-control-acceso-acl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasControlAccesoAclPageRoutingModule
  ],
  declarations: [ListasControlAccesoAclPage]
})
export class ListasControlAccesoAclPageModule {}
