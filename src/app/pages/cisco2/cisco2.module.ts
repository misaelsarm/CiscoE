import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cisco2PageRoutingModule } from './cisco2-routing.module';

import { Cisco2Page } from './cisco2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cisco2PageRoutingModule
  ],
  declarations: [Cisco2Page]
})
export class Cisco2PageModule {}
