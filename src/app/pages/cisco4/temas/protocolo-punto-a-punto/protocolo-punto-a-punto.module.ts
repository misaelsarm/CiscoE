import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocoloPuntoAPuntoPageRoutingModule } from './protocolo-punto-a-punto-routing.module';

import { ProtocoloPuntoAPuntoPage } from './protocolo-punto-a-punto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtocoloPuntoAPuntoPageRoutingModule
  ],
  declarations: [ProtocoloPuntoAPuntoPage]
})
export class ProtocoloPuntoAPuntoPageModule {}
