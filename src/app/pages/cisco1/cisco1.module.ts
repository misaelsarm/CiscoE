import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cisco1PageRoutingModule } from './cisco1-routing.module';

import { Cisco1Page } from './cisco1.page';
import { TabsPage } from 'src/app/tabs/tabs.page';
import { TabsPageModule } from 'src/app/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cisco1PageRoutingModule,
    TabsPageModule
  ],
  declarations: [Cisco1Page]
})
export class Cisco1PageModule {}
