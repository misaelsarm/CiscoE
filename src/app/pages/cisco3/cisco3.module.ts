import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cisco3PageRoutingModule } from './cisco3-routing.module';

import { Cisco3Page } from './cisco3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cisco3PageRoutingModule
  ],
  declarations: [Cisco3Page]
})
export class Cisco3PageModule {}
