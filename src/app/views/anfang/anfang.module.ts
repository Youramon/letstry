import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnfangPageRoutingModule } from './anfang-routing.module';

import { AnfangPage } from './anfang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnfangPageRoutingModule
  ],
  declarations: [AnfangPage]
})
export class AnfangPageModule {}
