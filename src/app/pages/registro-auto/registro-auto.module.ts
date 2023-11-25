import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { RegistroAutoPageRoutingModule } from './registro-auto-routing.module';

import { RegistroAutoPage } from './registro-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAutoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [RegistroAutoPage]
})
export class RegistroAutoPageModule {}
