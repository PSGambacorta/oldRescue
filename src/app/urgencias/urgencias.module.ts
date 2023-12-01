import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrgenciasPageRoutingModule } from './urgencias-routing.module';

import { UrgenciasPage } from './urgencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrgenciasPageRoutingModule
  ],
  declarations: [UrgenciasPage]
})
export class UrgenciasPageModule {}
