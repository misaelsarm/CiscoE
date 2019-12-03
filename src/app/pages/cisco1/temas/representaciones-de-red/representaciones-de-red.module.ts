import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepresentacionesDeRedPageRoutingModule } from './representaciones-de-red-routing.module';

import { RepresentacionesDeRedPage } from './representaciones-de-red.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepresentacionesDeRedPageRoutingModule
  ],
  declarations: [RepresentacionesDeRedPage]
})
export class RepresentacionesDeRedPageModule {}
