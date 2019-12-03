import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispositivosDeRedPageRoutingModule } from './dispositivos-de-red-routing.module';

import { DispositivosDeRedPage } from './dispositivos-de-red.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivosDeRedPageRoutingModule
  ],
  declarations: [DispositivosDeRedPage]
})
export class DispositivosDeRedPageModule {}
