import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverpageComponent } from '../popoverpage/popoverpage.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [PopoverpageComponent],
  imports: [
    CommonModule
  ],
  exports: [PopoverpageComponent]
})
export class PopoverpagemoduleModule { }
