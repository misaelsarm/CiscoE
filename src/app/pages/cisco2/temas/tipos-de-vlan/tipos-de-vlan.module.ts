import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposDeVlanPageRoutingModule } from './tipos-de-vlan-routing.module';

import { TiposDeVlanPage } from './tipos-de-vlan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposDeVlanPageRoutingModule
  ],
  declarations: [TiposDeVlanPage]
})
export class TiposDeVlanPageModule {}
