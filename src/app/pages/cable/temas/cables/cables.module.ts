import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CablesPageRoutingModule } from './cables-routing.module';

import { CablesPage } from './cables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CablesPageRoutingModule
  ],
  declarations: [CablesPage]
})
export class CablesPageModule {}
