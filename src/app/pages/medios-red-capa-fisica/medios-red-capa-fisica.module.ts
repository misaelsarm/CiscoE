import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediosRedCapaFisicaPageRoutingModule } from './medios-red-capa-fisica-routing.module';

import { MediosRedCapaFisicaPage } from './medios-red-capa-fisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediosRedCapaFisicaPageRoutingModule
  ],
  declarations: [MediosRedCapaFisicaPage]
})
export class MediosRedCapaFisicaPageModule {}
