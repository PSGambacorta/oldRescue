import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrgenciasPage } from './urgencias.page';

const routes: Routes = [
  {
    path: '',
    component: UrgenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrgenciasPageRoutingModule {}
