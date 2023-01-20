import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnfangPage } from './anfang.page';

const routes: Routes = [
  {
    path: '',
    component: AnfangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnfangPageRoutingModule {}
