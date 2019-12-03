import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediosRedCapaFisicaPage } from './medios-red-capa-fisica.page';

const routes: Routes = [
  {
    path: '',
    component: MediosRedCapaFisicaPage
  },
  {
    path: 'cable-de-cobre',
    loadChildren: () => import('./temas/cable-de-cobre/cable-de-cobre.module').then( m => m.CableDeCobrePageModule)
  },
  {
    path: 'cable-de-fibra-optica',
    loadChildren: () => import('./temas/cable-de-fibra-optica/cable-de-fibra-optica.module').then( m => m.CableDeFibraOpticaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediosRedCapaFisicaPageRoutingModule {}
