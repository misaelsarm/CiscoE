import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HardwareDelRouterPageRoutingModule } from './hardware-del-router-routing.module';

import { HardwareDelRouterPage } from './hardware-del-router.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HardwareDelRouterPageRoutingModule
  ],
  declarations: [HardwareDelRouterPage]
})
export class HardwareDelRouterPageModule {}
