import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TomarViajePageRoutingModule } from './tomar-viaje-routing.module';

import { TomarViajePage } from './tomar-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarViajePageRoutingModule,
    HttpClientModule
  ],
  declarations: [TomarViajePage]
})
export class TomarViajePageModule {}
