import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cisco4PageRoutingModule } from './cisco4-routing.module';

import { Cisco4Page } from './cisco4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cisco4PageRoutingModule
  ],
  declarations: [Cisco4Page]
})
export class Cisco4PageModule {}
