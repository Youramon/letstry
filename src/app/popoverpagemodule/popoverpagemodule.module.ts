import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverpageComponent } from '../popoverpage/popoverpage.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PopoverpageComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [PopoverpageComponent]
})
export class PopoverpagemoduleModule { }
