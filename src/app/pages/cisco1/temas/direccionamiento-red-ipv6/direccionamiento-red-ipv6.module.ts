import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionamientoRedIpv6PageRoutingModule } from './direccionamiento-red-ipv6-routing.module';

import { DireccionamientoRedIpv6Page } from './direccionamiento-red-ipv6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionamientoRedIpv6PageRoutingModule
  ],
  declarations: [DireccionamientoRedIpv6Page]
})
export class DireccionamientoRedIpv6PageModule {}
