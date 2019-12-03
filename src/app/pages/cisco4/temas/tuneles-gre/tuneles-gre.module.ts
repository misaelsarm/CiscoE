import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TunelesGrePageRoutingModule } from './tuneles-gre-routing.module';

import { TunelesGrePage } from './tuneles-gre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TunelesGrePageRoutingModule
  ],
  declarations: [TunelesGrePage]
})
export class TunelesGrePageModule {}
