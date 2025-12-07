import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverpageComponent } from '../popoverpage/popoverpage.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    PopoverpageComponent
  ],
  exports: [PopoverpageComponent]
})
export class PopoverpagemoduleModule { }
