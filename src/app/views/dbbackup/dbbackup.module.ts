import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbbackupPageRoutingModule } from './dbbackup-routing.module';

import { DbbackupPage } from './dbbackup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbbackupPageRoutingModule
  ],
  declarations: [DbbackupPage]
})
export class DbbackupPageModule {}
