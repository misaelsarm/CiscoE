import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionBasicaSwitchPageRoutingModule } from './configuracion-basica-switch-routing.module';

import { ConfiguracionBasicaSwitchPage } from './configuracion-basica-switch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionBasicaSwitchPageRoutingModule
  ],
  declarations: [ConfiguracionBasicaSwitchPage]
})
export class ConfiguracionBasicaSwitchPageModule {}
