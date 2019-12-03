import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HardwareDelSwitchPageRoutingModule } from './hardware-del-switch-routing.module';

import { HardwareDelSwitchPage } from './hardware-del-switch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HardwareDelSwitchPageRoutingModule
  ],
  declarations: [HardwareDelSwitchPage]
})
export class HardwareDelSwitchPageModule {}
