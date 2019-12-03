import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncapsulacionHdlcPageRoutingModule } from './encapsulacion-hdlc-routing.module';

import { EncapsulacionHdlcPage } from './encapsulacion-hdlc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncapsulacionHdlcPageRoutingModule
  ],
  declarations: [EncapsulacionHdlcPage]
})
export class EncapsulacionHdlcPageModule {}
