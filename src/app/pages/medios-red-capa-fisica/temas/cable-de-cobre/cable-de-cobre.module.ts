import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CableDeCobrePageRoutingModule } from './cable-de-cobre-routing.module';

import { CableDeCobrePage } from './cable-de-cobre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CableDeCobrePageRoutingModule
  ],
  declarations: [CableDeCobrePage]
})
export class CableDeCobrePageModule {}
