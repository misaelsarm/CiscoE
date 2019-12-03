import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionBasicaDispositivosPage } from './configuracion-basica-dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionBasicaDispositivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionBasicaDispositivosPageRoutingModule {}
