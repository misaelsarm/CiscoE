import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CableDeFibraOpticaPageRoutingModule } from './cable-de-fibra-optica-routing.module';

import { CableDeFibraOpticaPage } from './cable-de-fibra-optica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CableDeFibraOpticaPageRoutingModule
  ],
  declarations: [CableDeFibraOpticaPage]
})
export class CableDeFibraOpticaPageModule {}
