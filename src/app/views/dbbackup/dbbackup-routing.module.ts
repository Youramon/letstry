import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbbackupPage } from './dbbackup.page';

const routes: Routes = [
  {
    path: '',
    component: DbbackupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbbackupPageRoutingModule {}
