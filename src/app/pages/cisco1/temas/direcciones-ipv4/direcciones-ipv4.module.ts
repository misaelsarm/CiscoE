import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionesIpv4PageRoutingModule } from './direcciones-ipv4-routing.module';

import { DireccionesIpv4Page } from './direcciones-ipv4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionesIpv4PageRoutingModule
  ],
  declarations: [DireccionesIpv4Page]
})
export class DireccionesIpv4PageModule {}
