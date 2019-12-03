import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocoloEigrpPageRoutingModule } from './protocolo-eigrp-routing.module';

import { ProtocoloEigrpPage } from './protocolo-eigrp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtocoloEigrpPageRoutingModule
  ],
  declarations: [ProtocoloEigrpPage]
})
export class ProtocoloEigrpPageModule {}
