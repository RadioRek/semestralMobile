import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReestablecerPassPage } from './reestablecer-pass.page';

const routes: Routes = [
  {
    path: '',
    component: ReestablecerPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReestablecerPassPageRoutingModule {}
