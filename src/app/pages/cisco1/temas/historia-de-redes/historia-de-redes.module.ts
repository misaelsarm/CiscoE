import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriaDeRedesPageRoutingModule } from './historia-de-redes-routing.module';

import { HistoriaDeRedesPage } from './historia-de-redes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriaDeRedesPageRoutingModule
  ],
  declarations: [HistoriaDeRedesPage]
})
export class HistoriaDeRedesPageModule {}
