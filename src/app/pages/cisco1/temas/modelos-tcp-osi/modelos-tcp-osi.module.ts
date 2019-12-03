import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelosTcpOsiPageRoutingModule } from './modelos-tcp-osi-routing.module';

import { ModelosTcpOsiPage } from './modelos-tcp-osi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelosTcpOsiPageRoutingModule
  ],
  declarations: [ModelosTcpOsiPage]
})
export class ModelosTcpOsiPageModule {}
